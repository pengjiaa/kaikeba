const express = require("express")
const bodyParser = require("body-parser")

let serve = express()

serve.listen(2000)

serve.use(bodyParser.urlencoded({
    extended: false
}))

serve.post('/post', (req, res) => {
    console.log(req.body)
    console.log(req.cookies)
    res.cookie("aaaa", 444)
    res.send("end")
})