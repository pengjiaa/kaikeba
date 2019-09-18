const sss = require('./module')
const path = require("path")
const net = require("net")
console.log(sss.a)

var str = "/aaa/bbb/ccc.txt"

console.log(path.basename(str))
console.log(path.extname(str))
console.log(path.extname(str))

var bb = Buffer.from("ddbufffd")

console.log(bb.toString())
