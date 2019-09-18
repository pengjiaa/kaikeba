var http = require("http")
var fs = require("fs")
var url = require("url")
var querystring = require("querystring")

http.createServer(function (request, response) {
    let result = url.parse(request.url, true)
    console.log(result)
    response.writeHead("200", { 'Content-Type': "text/html;charset=utf-8" })
    if (result.pathname == "/") {
        response.write(`
        <form action="/submit" method="POST">
        用户名:<input name="name" type="text">
        密码:<input name="pass" type="text">
        <input type="submit" value = "tijiao">
        </form>
        `)

        response.end()
    } else if (result.pathname == "/submit") {
        console.log(request.method)
        let arr = []
        request.on("data", buffer => {
            arr.push(buffer)
        })
        request.on("end", () => {
            let postd = Buffer.concat(arr)
            let aaaa = querystring.parse(postd.toString())
            console.log(aaaa.name)
        })
        response.write("成功");
        response.end()
    }
    else {
        response.write("error");
        response.end()
    }
    // fs.readFile(`www/${request.url}`, (err, data) => {
    //     if (err) {
    //         response.writeHead("404")
    //         response.write("not found")
    //         response.end()
    //     } else {
    //         response.write(data)
    //         response.end()
    //     }
    // })
}).listen("2000")



