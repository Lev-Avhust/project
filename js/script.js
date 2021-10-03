
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

console.log (str.length);
console.log (str.toLocaleUpperCase());
console.log (str.toLowerCase());

const fruit = "Some fruit";
console.log(fruit.indexOf("Some"));

const logg = "Hello World!";
console.log(logg.slice(6, 11));
console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5));

const num = 50.4;

console.log(Math.round(num));
console.log(parseInt(num));
console.log(parseFloat(num));