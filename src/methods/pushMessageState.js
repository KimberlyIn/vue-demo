// 載入 eventBus
import eventBus from '@/methods/eventBus';

// 這是帶有 function 的具名匯出 也代入 response 以及 title
export default function(response, title = '更新') {
  if (response.data.success) {
    eventBus.emit('push-message', {
      style: 'success',
      title: `${title}成功`,
    });
  } else {
    const message = response.data.message === 'string'
    ? [response.data.message] : response.data.message;
    eventBus.emit('push-message', {
      style: 'danger',
      title: `${title}失敗`,
      content: message.join('、'),
    });
  }
}