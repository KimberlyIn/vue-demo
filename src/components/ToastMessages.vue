<template>
  <!-- <h3>這裡是 ToastMessages</h3> -->
  <div 
    class="toast-container position-absolute pe-3 top-0 end-0" 
    style="z-index: 1500">
    <div 
      v-for="(msg, key) in messages"
      :key="key" 
      class="toast show"
      :class="`toast${key}`" 
      role="alert">
      <div class="toast-header">
        <span 
          :class="`bg-${msg.style}`" 
          class="p-2 rounded me-2 d-inline-block">
        </span>
        <strong class="me-auto">{{ msg.title }}</strong>
        <button 
          type="button" 
          class="btn-close" 
          @click="clearToast(key)" 
          aria-label="Close"></button>
      </div>
      <div class="toast-body" v-if="msg.content">
        {{ msg.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
    };
  },
  // inject 注入 emitter 方法
  inject: ['emitter'],
  methods: {
    // ?
    toastShow() {
      setTimeout(() => {
        this.messages.shift();
      }, 6000);
    },
    // 清吐司
    clearToast(index) {
      this.messages.splice(index, 1);
    },
  },
  mounted() {
    // 在這個地方製作監聽 使用 emitter.on 接收資料
    this.emitter.on('push-message', (message) => {
      // 定義出 message 的結構並代入
      const { style = 'success', title, content } = message;
      this.messages.push({ style, title, content });
      this.toastShow();
    });
  },
};
</script>