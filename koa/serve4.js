const koa = require("koa")
const static = require("koa-static")
const Router = require("koa-router")

let serve = new koa()
serve.listen(2000)


// serve.use(static("./www/", {
//     maxAge: 86400 * 1000,
//     index: "1.html"
// }))

let staticRouter = new Router()
staticRouter.all(/\.jpg|\.png|\.gif/i, static("./www/", {
    maxAge: 60 * 86400 * 1000
}))
staticRouter.all(/\.css/i, static("./www/", {
    maxAge: 1 * 86400 * 1000
}))
staticRouter.all(/\.html/i, static("./www/", {
    maxAge: 20 * 86400 * 1000
}))
staticRouter.all("*", static("./www/", {   //其他类型申请
    maxAge: 100 * 86400 * 1000
}))

serve.use(staticRouter.routes())