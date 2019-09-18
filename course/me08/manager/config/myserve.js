const process = require("process")

console.log(process.env)

let mode = process.env.OS == "Windows_NT"?"dev":"prod"