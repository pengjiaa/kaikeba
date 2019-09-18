
var path = require('path')
module.exports = {
    mode: "production",
    entry: './index',
    output: {
        mode: "product",
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    }
}