const path = require('path')

console.log(path.sep)

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

//last section of the file path
const base = path.basename(filePath)
console.log(base)

//absolute gives the path to the file we are on
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)