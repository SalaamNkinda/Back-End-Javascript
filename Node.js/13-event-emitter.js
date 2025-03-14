// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const eventEmitter = require('events')

const customEmitter = new eventEmitter()

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on('response', (name, age) => {
    console.log(`Data received:\nUser -> ${name}.\nAge -> ${age}.`)
})

customEmitter.on('response', () => {
    console.log(`\nOther logic here...`)
})

customEmitter.emit('response', 'Salaam', 20)