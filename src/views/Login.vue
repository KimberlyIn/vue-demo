<template>
  <div class="container mt-5">
    <!-- @submit.prevent="signIn" 使畫面不會重新載入 -->
    <form class="row justify-content-center" @submit.prevent="signIn">
      <div class="col-md-6">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only">Email address</label>
          <!-- 查 required autofocus -->
          <input 
            type="email"  
            id="inputEmail"
            class="form-control"
            placeholder="Email address"  
            v-model="user.username"  
            required 
            autofocus/>
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only">password</label>
          <input 
          type="password" 
          id="inputPassword" 
          class="form-control" 
          v-model="user.password" 
          placeholder="password" 
          required />
        </div>
        <div class="text-end mt-4">
          <button class="btn btn-lg btn-primary btn-block" type="submit">
            登入
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    signIn() {
      const api = `${process.env.VUE_APP_API}/admin/signin`;
      this.$http.post(api, this.user)
        // console.log(this.user);
        .then((response) => {
          if(response.data.success) {
            const { token, expired } = response.data;
            document.cookie = `hexToken=${token};expires=${new Date(expired)};`
            // vue 連接後台
            this.$router.push('/admin/products');
          }
        });
    }
  },
};
</script>