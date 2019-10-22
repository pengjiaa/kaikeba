const koa = require("koa")
const Router = require("koa-router")
const session = require("koa-session")
const body = require("koa-better-body")
const Mock = require("mockjs")

let serve = new koa()
let router = new Router()
serve.listen(2000)
router.get("/a", async ctx => {
    var data = Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|1-10': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1
        }],
        'name|2': "a"
    })
    // 输出结果
    console.log(JSON.stringify(data, null, 4))
    ctx.body = JSON.stringify(data, null, 4)
})
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

// serve.use(session({
//     maxAge: 20 * 60 * 1000,   //有效期
//     renew: true    //自动续期
// }, serve))

// serve.use(async ctx => {
//     if (!ctx.session.view) {
//         ctx.session.view = 0
//     }
//     ctx.session.view++

//     ctx.body = `第${ctx.session.view}次`
// })

router.post("/upload", ctx => {
    console.log(ctx.request.files)
    ctx.body = "upload"
})


serve.use(router.routes())