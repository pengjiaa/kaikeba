const koa = require("koa")
const router = require("koa-router")
const Mock = require("mockjs")

let serve = new koa()
serve.listen(2000)

let rr = new router()


rr.get("/:id", async (ctx, next) => {
    await next()
    ctx.body = "bbbbbbbbb"
})

rr.get("/a", async (ctx, next) => {

    var data = Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|1-10': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1
        }]
    })
    // 输出结果
    console.log(JSON.stringify(data, null, 4))
    ctx.body = JSON.stringify(data, null, 4)
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