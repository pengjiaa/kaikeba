const Koa = require("koa")
const Router = require("koa-router")
const static = require("koa-static")
const body = require("koa-better-body")

let serve = new Koa()
serve.listen(2000)
let router = new Router()
//上传文件
serve.use(body({
    uploadDir: "./www/upload"
}))
router.post("/upload", ctx => {
    console.log(ctx.request.files)
    ctx.body = "upload"
})
//普通get请求
router.get("/a", ctx => {
    ctx.body = "aaa"
})
//获取文件请求
router.all(/\.jpg|\.png|\.gif/i, static("./www/", {
    maxAge: 60 * 86400 * 1000
}))
router.all(/\.html/i, static("./www/", {
    maxAge: 60 * 86400 * 1000
}))

//以上都没有会走这默认的
router.all("*", ctx => {
    ctx.body = "default"
})
serve.use(router.routes())