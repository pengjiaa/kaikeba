const Koa = require("koa")
const Router = require("koa-router")
const static = require("./routers/static")
const body = require("koa-better-body")
const path = require("path")
const session = require("koa-session")
const fs = require("fs")
const ejs = require("koa-ejs")
const config = require("./config")

let serve = new Koa()
serve.listen(config.PORT)

serve.use(body({
    uploadDir: path.resolve(__dirname, "./static/upload")
}))

serve.keys = fs.readFileSync('./.keys').toString().split("\n")
serve.use(session({
    maxAge: 20 * 60 * 1000,
    renew: true
}, serve))

serve.context.db = require("./libs/database")
serve.context.config = config

ejs(serve, {
    root: path.resolve(__dirname, "template"),
    layout: false,
    viewExt: "ejs",
    cache: false,
    debug: false
})

let router = new Router()

// router.use(async (ctx, next) => {
//     try {
//         await next()
//     } catch (e) {
//         ctx.status = 520
//         ctx.body = "服务器错误"
//         // ctx.throw(500, "ddddddddd");
//     }
// })

router.use('/admin', require("./routers/admin"))
router.use('/api', require("./routers/api"))
router.use('/', require("./routers/www"))

static(router)

serve.use(router.routes())