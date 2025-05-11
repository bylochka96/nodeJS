const path = require('path');

// console.log(path.join(__dirname, __filename))
const fullpath = path.join(__dirname, __filename)
console.log(path.parse(fullpath).dir)

const siteURL = 'http://localhost:8080/user?id=5123'
const url = new URL(siteURL);
console.log(url)