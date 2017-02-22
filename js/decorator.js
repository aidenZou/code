/**
 * 装饰器函数 Decorator
 */


let $confirm = function (fun) {
    return function (...args) {
        console.log('入参：', args);
        if (confirm("装饰器函数 Decorator:\n确认要删除订单吗？")) {
            //  TODO: 确定
            fun.apply(this, args);
        } else {
            // TODO: 取消
        }
    };
}

let query = function (orderId, type) {
    // Ajax
    console.log(`ajax: ${orderId}`, type);
}

query('123123', '删除'); // ajax: 123123 删除

query = $confirm(query);

query('123123', '删除'); // 先 confirm，再： ajax: 123123 删除