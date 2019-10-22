var o = { a: 2 }
var descriptor = {
    writable: true,        //决定属性可不可以修改
    value: 3,
    configurable: true,   //决定属性可不可以删除
    enumerable: true       //决定属性是否枚举
}
console.log(Object.defineProperty(o, "b", descriptor))
console.log(Object.getOwnPropertyNames(Object.defineProperty(o, "b", descriptor)))
delete o['b']
console.log(o)

var o2 = {
    a: 1
}
let temp = null
Object.defineProperty(o2, a, {
    enumerable: true,
    configurable: true,
    get: function () {
        return temp
    },
    set: function (val) {
        temp = val
    }
})
