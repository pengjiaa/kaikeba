const Koa = require("koa")
const Router = require("koa-router")
const ejs = require("koa-ejs")
const static = require("koa-static")
const path = require("path")

let serve = new Koa()
serve.listen(2000)

ejs(serve, {
    root: path.resolve(__dirname, 'template'),
    layout: false,
    viewExt: 'ejs',
    cache: false,
    debug: false
})

serve.use(async ctx => {
    await ctx.render('2', {
        arr: [1, 2, 3, 4]
    })
})