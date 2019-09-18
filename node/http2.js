const http = require("http")
const querystring = require("querystring")
const url = require("url")

http.createServer((request, response) => {
    response.writeHead("200", { 'Content-Type': "text/plain;charset=utf-8" })
    console.log(request)
    response.write("post方法")
    response.end()

}).listen(2000)