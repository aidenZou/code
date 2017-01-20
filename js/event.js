/**
 * 观察者模式在 Web 中最常见的应该是 DOM 事件的监听和触发。
 * 订阅：通过 addEventListener 订阅 document.body 的 click 事件。
 * 发布：当 body 节点被点击时，body 节点便会向订阅者发布这个消息。
 */
document.body.addEventListener('click', function listener(e) {
    console.log(e);
}, false);

document.body.click(); // 模拟用户点击
