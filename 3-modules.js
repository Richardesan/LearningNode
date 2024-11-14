// Modules - Encapsulated Code (only share minimum)
// CommonJS, every file is module (by default)

const names = require('./4-names');
const sayHI = require('./5-utils')
const richard = require('./2-gloabals')
const data = require('./6-alternative-flavor')

require('./7-mind-grenade')

console.log(data)
const {john, peter} = names
sayHI(richard);
sayHI(john);
sayHI(peter);