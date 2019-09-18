const Koa = require("koa")
const mysql = require("mysql")
const co = require("co-mysql")
const Router = require("koa-router")

let connection = mysql.createPool({
    host: "",
    user: "",
    password: "",
    database: ""
})

let db = co(connection)

let serve = new Koa()
serve.listen(2000)

serve.use(async (ctx, next) => {
    try {
        await next();
    } catch (e) {
        ctx.body = "错了"
    }
})

let rou = new Router()
rou.all("*", async (ctx, next) => {
    try {
        await next()
    } catch (e) {
        ctx.body = "router错了"
    }
})

serve.context = db

serve.use(async ctx => {
    let data = ctx.db.query('SELECT * FROM aaa')
    ctx.body = data
})