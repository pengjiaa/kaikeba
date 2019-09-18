const fs = require("fs")

let key_length = 1024
let key_count = 2048
let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,./<>?;:[]{}~!@#$%^&*()_+"
let arr = []
for (let i = 0; i < key_count; i++) {
    let key = ''
    for (let j = 0; j < key_length; j++) {

        key += chars[Math.floor(Math.random() * chars.length)]
    }
    arr.push(key)
}

fs.writeFileSync('.keys', arr.join('\n'))