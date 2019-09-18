const fs = require("fs")
const zlib = require("zlib")

fs.readFile("1.txt", (err, buffer) => {
    if (err) {
        console.log(err)
    } else {
        console.log(buffer.toString())
    }
})

let rs = fs.createReadStream("./www/a.jpg")
let ws = fs.createWriteStream("b.jpg-gz")

let gz = zlib.createGzip()

rs.pipe(gz).pipe(ws)

// rs.pipe(ws)

rs.on("error", (error) => {
    console.log(error)
})

ws.on("finish", () => {
    console.log("完成")
})

//读写流示例   压缩   加密

