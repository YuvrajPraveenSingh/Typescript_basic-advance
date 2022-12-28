const name = require('../module_ecapsulation/names')
console.log(name);

function sayHi(name) {
    console.log(`Hello there ${name} `)
}
sayHi('yuvraj ')
sayHi(name.john)