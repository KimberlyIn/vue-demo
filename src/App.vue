<template>
  <ToastMessages />
  <router-view />
</template>

<script>
import ToastMessages from '@/components/ToastMessages.vue'; 
import emitter from '@/methods/eventBus';
import $httpMessageState from '@/methods/pushMessageState';

export default { 
  provide() {
    return {
      emitter,
      $httpMessageState,
    };
  },
  components: {
    ToastMessages,
  },
};
</script>

