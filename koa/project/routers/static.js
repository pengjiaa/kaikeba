

const static = require("koa-static")

module.exports = function (router, options) {

    options = options || {}
    options.image = options.image || 30
    options.script = options.script || 1
    options.html = options.html || 30
    options.css = options.css || 30
    options.other = options.other || 7


    router.all(/\.jpg|\.png|\.gif$/i, static('./static', {
        maxAge: options.image * 86400 * 1000
    }))
    router.all(/\.js|\.jsx$/i, static('./static', {
        maxAge: options.script * 86400 * 1000
    }))
    router.all(/\.html|\.htm$/i, static('./static', {
        maxAge: options.html * 86400 * 1000
    }))
    router.all(/\.html|\.htm$/i, static('./static', {
        maxAge: options.css * 86400 * 1000
    }))
    router.all("*", static('/static', {
        maxAge: options.other * 86400 * 1000
    }))
}