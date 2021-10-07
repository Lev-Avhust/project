
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);


// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
        
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// if (personalMovieDB.count <10) {
//     console.log ('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count >=10 && personalMovieDB.count <30) {
//     console.log ('Неплохой результат');
// } else if (personalMovieDB.count >=30 && personalMovieDB.count <50) {
//     console.log ('Да ты киноман!');
// }

// console.log(personalMovieDB);

// function showFirstMessage(text) {
//     console.log(text);
// }
// showFirstMessage("Hello World!");

// const logger = function() {
//     console.log ("Hello!")
// }

// logger ();

// const calc = (a, b) => {
//     console.log ("1");
//     return a + b;
// };

// const str = "test";
// const arr = [1, 2, 3];

// console.log (str.length);
// console.log (str.toLocaleUpperCase());
// console.log (str.toLowerCase());

// const fruit = "Some fruit";
// console.log(fruit.indexOf("Some"));

// const logg = "Hello World!";
// console.log(logg.slice(6, 11));
// console.log(logg.substring(6, 11));
// console.log(logg.substr(6, 5));

// const num = 50.4;

// console.log(Math.round(num));
// console.log(parseInt(num));
// console.log(parseFloat(num));

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start ();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//               b = prompt('На сколько оцените его?', '');
            
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }

// }

// rememberMyFilms();

// function detectPersonalLvl() {
//     if (personalMovieDB.count <10) {
//         console.log ('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >=10 && personalMovieDB.count <30) {
//         console.log ('Неплохой результат');
//     } else if (personalMovieDB.count >=30 && personalMovieDB.count <50) {
//         console.log ('Да ты киноман!');
//     }
// }

// detectPersonalLvl();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
    
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }       
// }

// writeYourGenres();


// function first() {
//     // Do something
//     setTimeout (function() {
//         console.log ("1");
//     }, 500);
// }

// function second() {
//     console.log("2");
// }

// first();
// second();



// function learnJS(lang, callback) {
//     console.log(`Я учу ${lang}`);
//     callback();
// }

// function done() {
//     console.log("Я прошел этот урок!");
// }

// learnJS('JavaScript', done);

// const options = {
//     name: "test",
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: "black",
//         bg: "red",
//     }
// };

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === "object") {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет знаечение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет знаечение ${options[key]}`);
//         counter++;
//     }
// }

// console.log(counter);

// const options = {
//     name: "test",
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: "black",
//         bg: "red",
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };


// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);

// const arr = [1, 2, 3, 4, 5, 6];

// arr[99] = 100;

// console.log(arr.length);

// console.log(arr);

// arr.pop();
// arr.push(10);
// arr.unshift(0);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }


// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });


// const str = prompt("", "");
// const products = str.split(", ");

// products.sort();
// console.log(products.join("; "));

// const arr = [1, 32, 31, 4, 25, 16];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum (a, b) {
//     return a - b;
// }

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(a);
// console.log(b);

// const obj = {
//     a: 5,
//     b: 1
// };

// console.log(obj.a);

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;

// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers.a);
// console.log(numbers.a);


// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const add = {
//     d: 17,
//     e: 20
// }

// console.log(Object.assign(numbers, add));


// const add = {
//     d: 17,
//     e: 20
// }

// const copyAdd = Object.assign({}, add);

// copyAdd.d = 71

// console.log(add);
// console.log(copyAdd);

// const oldArr = ['a', 'b', 'c'];
// const newArr = oldArr.slice();

// newArr[1] = 'fjfjfjfj';

// console.log(oldArr);
// console.log(newArr);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'lovejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log (a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// };

// const num = [2, 4, 6];

// log(...num);

// const arr = ['1', 'b'];

// const newArr = [...arr];

// console.log(newArr);

// const q = {
//     one: 1,
//     two: 2
// };

// const newQ = {...q};

// console.log(newQ);

// const soldier = {
//     health: 100,
//     armor: 50,
//     sayHello: function() {
//         console.log("Hello!");
//     }
// };

// const john = {
//     health: 150,
// };

// Object.setPrototypeOf(john, soldier);

// john.sayHello();

// const soldier = {
//     health: 100,
//     armor: 50,
//     sayHello: function() {
//         console.log("Hello!");
//     }
// };

// const john = Object.create(soldier);

// john.sayHello();