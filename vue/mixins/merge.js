/**
 * Created by zouguilin on 2017/1/3.
 *
 * mixins的合并策略
 * 同名钩子函数被并入一个数组，因而都会被调用。另外，混合的钩子将在组件自己的钩子之前调用。
 * 值为对象的选项，如 methods, components 和 directives 将合并到同一个对象内。如果键冲突则组件的选项优先。
 *
 * 注意 Vue.extend() 使用同样的合并策略。
 */

var mixin = {
    created: function () {
        console.log(this)
        let option = this.$options.doNotInit
        console.log(option)
        if (!option) {
            console.log('mixin hook called')
        }
    },
    methods: {
        foo: function () {
            console.log('foo')
        },
        conflicting: function () {
            console.log('from mixin')
        }
    }
}

var vm = new Vue({
    mixins: [mixin],
    created: function () {
        console.log('component hook called')
    },
    methods: {
        bar: function () {
            console.log('bar')
        },
        conflicting: function () {
            console.log('from self')
        }
    }
})

var vm2 = new Vue({
    mixins: [mixin],
    doNotInit: true,
    created: function () {
        console.log('component2 hook called')
    }
})

// -> "mixin hook called"
// -> "component hook called"

vm.foo() // -> "foo"
vm.bar() // -> "bar"
vm.conflicting() // -> "from self"