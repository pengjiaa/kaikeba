const http = require("http")


http.createServer((req, res) => {
    let arr = [];

    req.on("data", (buffer) => {
        arr.push(buffer)
    })

    req.on("end", () => {
        let buffer = Buffer.concat(arr)
        console.log(buffer.toString())
    })
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.write("dddd")
    res.end()
}).listen(2000)