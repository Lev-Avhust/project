function myModule() {
  this.hello = function() {
    console.log('Hello!');
  };

  this.goodbye = function () {
    console.log('Bye!');
  };
}

module.exports = myModule;

// ES6

export let one = 1;

let two = 2;

export {two};

export function sayH1() {
  console.log('Hello!');
}

export default function sayHi() {
  console.log('Hello!');
}