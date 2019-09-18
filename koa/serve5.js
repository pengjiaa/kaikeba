const koa = require("koa")
const Router = require("koa-router")
const session = require("koa-session")
const body = require("koa-better-body")

let serve = new koa()
let router = new Router()
serve.listen(2000)
serve.use(body({
    uploadDir: "./www/upload"
}))

serve.keys = ["111", "222", "333"]
// serve.use(async ctx => {
//     // ctx.cookies.get()
//     // ctx.cookies.set("username", "password", {
//     //     maxAge: 2 * 86400 * 1000,
//     //     signed: true
//     // })

//     console.log(ctx.cookies.get("username", { signed: true }))


// })

serve.use(session({
    maxAge: 20 * 60 * 1000,   //有效期
    renew: true    //自动续期
}, serve))

serve.use(async ctx => {
    if (!ctx.session.view) {
        ctx.session.view = 0
    }
    ctx.session.view++

    ctx.body = `第${ctx.session.view}次`
})

router.post("/upload", ctx => {
    console.log(ctx.request.files)
    ctx.body = "upload"
})

serve.use(router.routes())