const myModule = require('./import.js');

const myModuleInstance = new myModule;

myModuleInstance.hello();
myModuleInstance.goodbye();

// ES6

import {one as first} from './import.js';

console.log(first);
// console.log(`${one} and ${two}`);


import * as data from './import.js';

console.log(`${data.one} and ${data.two}`);
data.sayHi();

import sayHi from './import.js';

sayHi();