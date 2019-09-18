
const express = require("express")
const bodyParse = require("body-parser")

let serve = express()

serve.listen(2000)

serve.use(bodyParse.urlencoded())

serve.get("/a", (req, res, next) => {
    res.send({ a: 2, b: 3 })
    req.usertype = "vip"
    console.log(111111)
    next()
})
serve.get("/b", (req, res, next) => {
    res.send("bbbb")
    next()
})
serve.get("/c", (req, res, next) => {
    console.log(req.query)
    res.send("cccc")
    next()
})

serve.use(express.static("./www/"))