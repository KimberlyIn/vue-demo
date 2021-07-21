<template>
<h3>這裡是 products</h3>
  <div>
    <Loading :active="isLoading" :z-index="1060"></Loading>
    <div class="text-end mt-4">
      <button class="btn btn-primary" type="button" @click="openModal(true)" >
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="200">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-right">
            <!-- 使用 filters 陣列方法帶出原價 -->
            <!-- currency 可以將數字格式化為貨幣，默認是美元符號，你可以自己傳入所需的符號 -->
            {{ $filters.currency(item.origin_price) }}
          </td>
          <td class="text-right">
            {{ $filters.currency(item.price) }}
          </td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <!-- @click="openModal(false, item)" 如果按鈕不是新增 就啟動編輯 -->
              <button 
                class="btn btn-outline-primary btn-sm" 
                type="button" 
                @click="openModal(false, item)">
                編輯
              </button>
              <button 
                class="btn btn-outline-danger btn-sm" 
                type="button" 
                @click="openDelProductModal(item)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
    <ProductModal 
      @update-product="updateProduct" 
      :product="tempProduct" 
      :isNew="isNew" 
      ref="productModal" />
      <DelModal :item="tempProduct" ref="delModal" @del-item="delProduct" />
  </div>
</template>

<script>
import DelModal from '@/components/DelModal.vue';
import Pagination from '@/components/Pagination.vue';
import ProductModal from '@/components/ProductModal.vue';

export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false,
      // ?
      status: {
        fileUploading: false,
      },
      modal: {
        editModal: '',
        delModal: '',
      },
      // 當前的頁面
      currentPage: 1,
    };
  },
  components: {
    ProductModal,
    DelModal,
    Pagination,
  },
  inject: ['emitter'],
  methods: {
    getProducts(page = 1) {
      this.currentPage = page;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.isLoading = true;
      this.$http.get(api)
      .then((response) => {
        if (response.data.success) {
          // 將商品回傳
          this.products = response.data.products;
          // 回傳商品分頁
          this.pagination = response.data.pagination;
          // 商品列表及頁面回傳完成 就把 loading 關掉
          this.isLoading = false; 
        }
      });
    },
    // 判斷是否為新增按鈕
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
        this.isNew = true;
      } else {
        this.tempProduct = { ...item };
        this.isNew = false;
      }
      // 使用 $refs 取得動元素 彈出 Modal
      const productComponent = this.$refs.productModal;
      productComponent.openModal();
    },
    // 新增購物車
    updateProduct(item) {
      // 產品資料存入 tempProduct
      this.tempProduct = item;
      // ? 為什麼這裡不是 cart 而是 /admin/product
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = 'post';
      let status = '新增產品';
      // 如果新增 在這裡反轉為編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
        httpMethod = 'put';
        status = '更新產品';
      }
      // ？
      // 這裡我理解為 上面是判斷API該使用 post 或是 put
      // 底下才是串接API
      const productComponent = this.$refs.productModal;
      this.$http[httpMethod](api, { data: this.tempProduct })
      .then((response) => {
        if(response.data.success) {
          this.$httpMessageState(response, status);
          productComponent.hideModal();
          // ?
          this.getProducts(this.currentPage);
        } else {
          // ?
          this.$httpMessageState(response, status);
        }
      });
    },
    // 刪除全部商品
    openDelProductModal(item) {
      this.tempProduct = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.openModal();
    },
    // 刪除單一商品
    delProduct() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      this.isLoading = true;
      this.$http.delete(url)
      .then((response) => {
        // ?
        this.$httpMessageState(response, '刪除產品');
        const delComponent = this.$refs.delModal;
        delComponent.hideModal();
        this.getProducts(this.currentPage);
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>