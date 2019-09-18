const fs = require("fs")
const http = require("http")
const zlib = require("zlib")
const url = require("url")
const path = require("path")

http.createServer((req, res) => {
    console.log(url.parse(req.url, true))
    console.log(url.parse(req.url, true).pathname)


    let pathname = url.parse(req.url).pathname
    let filepath = pathname.replace("/", "")

    fs.stat(filepath, (err, stat) => {
        if (err) {
            // res.setHeader("Content-Type", "text/plain;charset=UTF-8")
            res.setHeader("content-encoding", "")
            res.writeHead("404")
            res.write("not found")
            res.end()
        } else {
            let gz = zlib.createGzip()
            let rs = fs.createReadStream(filepath)
            rs.on("error", (err) => {
                // res.writeHead("404")
                // res.write("未找到")
                // res.end()
            })
            res.setHeader("content-encoding", "gzip")
            rs.pipe(gz).pipe(res)
        }
    })




}).listen(2000)