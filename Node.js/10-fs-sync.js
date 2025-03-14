//different method to the next part
/*const fs = require('fs')
fs.readFileSync*/

const {readFileSync, writeFileSync} = require('fs');
console.log("Start!")
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)
writeFileSync(
    './content/result.txt', 
    `Hello, this is the result: ${first} ${second}`,
    {flag: 'a'}
)
console.log("Done with this task...")
console.log("Starting the next one...") 