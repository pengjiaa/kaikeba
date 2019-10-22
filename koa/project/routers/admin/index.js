const Router = require("koa-router")
const fs = require("await-fs")
const path = require("path")
const config = require("../../config")
const mock = require("../../mock")
const common = require("../../libs/common")

let router = new Router()

router.get('/login', async ctx => {
    await ctx.render('admin/login', {
        HTTP_ROOT: ctx.config.HTTP_ROOT,
        errmsg: ctx.query.errmsg
    })
})
router.post('/login', async ctx => {
    let { HTTP_ROOT } = ctx.config
    let { user, password } = ctx.request.fields;
    let admins = JSON.parse((await fs.readFile(path.resolve(__dirname, "../../admin.json"))).toString())

    let flag = false;
    for (let i = 0; i < admins.length; i++) {
        if (admins[i].user == user && admins[i].password == common.md5(password + config.ADMIN_PREFIX)) {
            flag = true
        }
    }

    if (flag) {
        ctx.session['admin'] = user
        ctx.redirect(`${HTTP_ROOT}/admin/banner`)
    } else {
        ctx.redirect(`${HTTP_ROOT}/admin/login?errmsg=${encodeURIComponent("用户名或密码错误")}`)
    }
})

router.all("*", async (ctx, next) => {
    let { HTTP_ROOT } = ctx.config
    if (ctx.session['admin']) {
        await next()
    } else {
        // ctx.body = "你不是管理员"
        ctx.redirect(`${HTTP_ROOT}/admin/login`)
    }
})

router.get("/", ctx => {
    let { HTTP_ROOT } = ctx.config
    ctx.redirect(`${HTTP_ROOT}/admin/banner`)
})

router.get('/banner', async ctx => {
    let { HTTP_ROOT } = ctx.config
    await ctx.render("admin/table", {
        bannerList: mock.bannerList,
        action: `${HTTP_ROOT}/admin/banner`,
        fields: [
            { title: "标题", name: "id", type: "text" },
            { title: "上传图片", name: "src", type: "file" },
            { title: "跳转链接", name: "href", type: "text" },
        ]
    })
})
router.post('/banner', async ctx => {
    let { title, src, href } = ctx.request.fields
    console.log(path.basename(src[0].path))


    ctx.redirect(`${HTTP_ROOT}/admin/banner`)
})


module.exports = router.routes()