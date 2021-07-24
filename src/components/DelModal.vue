<template>
  <!-- <h3>這裡是 DelModal </h3> -->
  <div class="madal fade" id="delModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title">
            <span>刪除 {{ item.title }}</span>
          </h5>
          <button type="button" class="btn-close"
                  data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          是否刪除 <strong class="text-danger">{{ item.title }}</strong> (刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary"
                  data-bs-dismiss="modal">取消
          </button>
          <button type="button" class="btn btn-danger"
                  @click="$emit('del-item')">確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 載入 bootstrap
import Modal from 'bootstrap/js/dist/modal';

export default {
  // 將外層資料往內層放
  props: {
    item: {},
  },
  data() {
    return {
      modal: '',
    };
  },

  emits: ['del-item'],
  methods: {
    // 在畫面呈現
    openModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
  },
  mounted() {
    // bootstrap 樣式
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>