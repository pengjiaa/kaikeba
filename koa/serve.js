const Koa = require("koa")
const Router = require("koa-router")

let serve = new Koa()
serve.listen(2000)

let router = new Router()


let aaaRouter = new Router()
let aaaRouter1 = new Router()
let aaaRouter2 = new Router()


aaaRouter.get("/111", async ctx => {
    ctx.body = "aaa111"
})
aaaRouter.get("/222", async ctx => {
    ctx.body = "aaa2222"
})


let bbbRouter = new Router()
let bbbRouter1 = new Router()
let bbbRouter2 = new Router()

bbbRouter.get("/111", async ctx => {
    ctx.body = "bbb111"
})
bbbRouter.get("/222", async ctx => {
    ctx.body = "bbb222"
})
router.use("/a", aaaRouter.routes())
router.use("/b", bbbRouter.routes())
serve.use(router.routes())

