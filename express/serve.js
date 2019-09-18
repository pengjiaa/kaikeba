const process = require("process")
const express = require("express")
// console.log(process.argv) //查看是什么命令

let serve = express()

serve.listen(2000)

serve.get("/a", (req, res, next) => {
    res.send({ a: 2, b: 3 })
    req.usertype = "vip"
    console.log(111111)
    next()
})
serve.get("/a", (req, res, next) => {
    // res.send("dddddddddd")
    console.log(req.usertype)
    console.log(2222222)
    next()
})

serve.use((req, res, next) => {
    console.log(44444)
})