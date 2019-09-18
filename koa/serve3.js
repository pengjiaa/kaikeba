const koa = require("koa")
const router = require("koa-router")

let serve = new koa()
serve.listen(2000)

let rr = new router()


rr.get("/:id", async (ctx, next) => {
    await next()
    ctx.body = "bbbbbbbbb"
})

rr.get("/a", async (ctx, next) => {
    ctx.body = "aaaa"
})


rr.get("/a/:id/:aa", (ctx, next) => {
    console.log(ctx.params)
    console.log(ctx.url)
    console.log(ctx.path)
    console.log(ctx.query)
    console.log(ctx.ip)
    // console.log(ctx.headers)
    ctx.state = 333
    ctx.body = `fffffffff`
})




serve.use(rr.routes())