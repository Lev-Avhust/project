

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


// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,

//     start: () => {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },
//     rememberMyFilms: () => {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из последних просмотренных фильмов?', ''), b = prompt('На сколько оцените его?', '');

//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }

//     },
//     detectPersonalLvl: () => {
//         if (personalMovieDB.count < 10) {
//             console.log('Просмотрено довольно мало фильмов');
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log('Неплохой результат');
//         } else if (personalMovieDB.count >= 30 && personalMovieDB.count < 50) {
//             console.log('Да ты киноман!');
//         }
//     },
//     showMyDB: (hidden) => {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }

//     },
//     toggleVisibleMyDB: () => {
//         if (personalMovieDB.ptivate) {
//             personalMovieDB.ptivate = false;
//         } else {
//                personalMovieDB.ptivate = true;
//         }
//     },
//     writeYourGenres: () => {
//         for (let i = 1; i <= 3; i++) {
//             let genre = prompt(`Ваш любимый жанр под номером ${i}`);

//             if (genre == '' || genre == null) {
//                 console.log('Вы ввели некорректные данные!');
//                 i--;
//             } else {
//                 personalMovieDB.genres[i - 1] = genre;
//             }   
//         }
//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });
//     }
// };



// to String 

// console.log(typeof(String(null)));
// console.log(typeof(String(4)));

// console.log(typeof(5 + ""));

// const num = 5;

// console.log("https://vk.com/catalog/" + num);

// const fontSize = 26 + 'px';

// console.log(fontSize);

// to Number

// console.log(typeof(Number('4')));

// console.log(typeof(+'5'));

// console.log(typeof(parseInt('4px', 10)));

// let answ = +prompt("Hello!", "");

// to Boolean

// 0, '', null, undefined, NaN - false

// let switcher = null;

// if (switcher) {
//     console.log('Working...');
// }

// switcher = 1;
// if (switcher) {
//     console.log('Working...');
// }

// console.log(typeof(Boolean('4')));


// alert(typeof("1"[0]));

// const box = document.getElementById("box");

// console.log(box);

// const btns = document.getElementsByTagName("button")[1];

// console.log(btns);

// const circles = document.getElementsByClassName("circle");

// console.log(circles[1]);

// const hearts = document.querySelectorAll(".heart");

// hearts.forEach(item => {
//     console.log(item);
// });

// const oneHeart = document.querySelector(".heart");

// console.log(oneHeart);

// const div = document.querySelector("div");

// console.log(div);

// const box = document.getElementById("box"),
//       btns = document.getElementsByTagName("button"),
//       circles = document.getElementsByClassName("circle"),
//       hearts = document.querySelectorAll(".heart"),
//       oneHeart = document.querySelector(".heart"),
//       wrapper = document.querySelector(".wrapper");

// box.style.backgroundColor = "blue";
// box.style.width = "500px";

// box.style.cssText = "background-color: blue; width: 500px";

// btns[1].style.borderRadius = "100%";

// circles[0].style.backgroundColor = "red";

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = "blue";
// }

// hearts.forEach(item => {
//     item.style.backgroundColor = "blue";
// });

// const div = document.createElement("div");

// const text = document.createTextNode("Hello!! Worldd!!");

// div.classList.add("black");

// document.body.append(div);

// wrapper.append(div);

// wrapper.prepend(div);

// hearts[0].before(div);

// hearts[0].after(div);

// circles[0].remove();

// hearts[0].replaceWith(circles[0]);

// div.innerHTML = "<h1>Hello</h1>";

// div.textContent = "JIJI";

// div.insertAdjacentHTML("afterend", "<h1>GIG</h1>")

// const movieDB = {
//     movies: [
//         "Логан",
//         "Лига справедливости",
//         "Ла-ла лэнд",
//         "Одержимость",
//         "Скотт Пилигрим против..."
//     ]
// };

// const adv = document.querySelectorAll(".promo__adv img"),
//       advHead = document.getElementsByClassName("promo__adv-title"), 
//       poster = document.querySelector(".promo__bg"),
//       genre = poster.querySelector(".promo__genre"),
//       movieList = document.querySelector(".promo__interactive-list");

// adv.forEach(item => {
//     item.remove();
// });

// advHead[0].remove();

// genre.textContent = 'драма';

// poster.style.backgroundImage = "url('img/bg.jpg')";

// movieList.innerHTML = "";

// movieDB.movies.sort();

// movieDB.movies.forEach((film, i) => {
//     movieList.innerHTML +=`
//         <li class="promo__interactive-item">${i + 1} ${film}
//             <div class="delete"></div>
//         </li>
//     `;
// });

// const overlay = document.querySelector(".overlay")
//       btns = document.querySelectorAll("button");

// btn.onclick = function() {
//     alert('click');
// };

// btn.addEventListener('click', () => {
//     console.log("hover");
// });

// let i = 0;
// const deleteElement = (e) => { 
//     console.log(e.currentTarget);
//     console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement)
    // }
// };

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

// btns.forEach(e => {
//     e.addEventListener('click', deleteElement);
// });

// for (const i of btns) {
//     i.addEventListener('click', deleteElement, {once: true});
// }

// e.target.remove();

// const link = document.querySelector('a');

// link.addEventListener('click', (e) => {
//     e.preventDefault();

//     console.log(e.target);
// });

// console.log(document.body);

// console.log(document.documentElement);

// console.log(document.body.childNodes);

// console.log(document.body.firstChild);
// console.log(document.body.lastChild);


// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector("[data-current='3']").parentElement.parentElement);

// console.log(document.querySelector("[data-current='3']").nextElementSibling);

// console.log(document.querySelector("[data-current='3']").previousElementSibling);

// for (const node of document.body.childNodes) {
//     if (node.nodeName == '#text') {
//         continue;
//     }
//     console.log(node);
// }

// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

// window.addEventListener("DOMContentLoaded", () => {
//     const box = document.querySelector(".box");

//     box.addEventListener('touchstart', (e) => {
//         e.preventDefault();

//         console.log('start');
//         console.log(e.targetTouches);
//     });
//     box.addEventListener('touchmove', (e) => {
//         e.preventDefault();
//                 sessionStorage , kkss, 
//         console.log(e.targetTouches[0].pageX);
//     });
//     box.addEventListener('touchend', (e) => {
//         e.preventDefault();

//         console.log('end');
//     });
// });

// touches
// targetTouches

// document.addEventListener('DOMContentLoaded', () => {
//     const movieDB = {
//         movies: [
//             "Логан",
//             "Лига справедливости",
//             "Ла-ла лэнд",
//             "Одержимость",
//             "Скотт Пилигрим против..."
//         ]
//     };
    
//     const adv = document.querySelectorAll(".promo__adv img"),
//           advHead = document.getElementsByClassName("promo__adv-title"), 
//           poster = document.querySelector(".promo__bg"),
//           genre = document.querySelector(".promo__genre"),
//           movieList = document.querySelector(".promo__interactive-list"),
//           addForm = document.querySelector("form.add"),
//           addImput = document.querySelector(".adding__input"),
//           checkBox = document.querySelector("[type='checkbox']");

//     addForm.addEventListener('submit', (e) => {
//         e.preventDefault();

//         let newFilm = addImput.value;
//         const favorite = checkBox.checked;

//         if(newFilm) {
        
//             if(newFilm.length > 21) {
//                 newFilm = `${newFilm.substring(0, 22)}...`;
//             }

//             if (favorite) {
//                 console.log("Добавляем любимый фильм");
//             }
            
//         movieDB.movies.push(newFilm);
//         sortArr(movieDB.movies);

//         createMovieList(movieDB.movies, movieList);
//         };

//         e.target.reset();

//     });
    
//     const deleteAdv = (arr) => {
//         arr.forEach(item => {
//             item.remove();
//             });
//     }; 

//     deleteAdv(adv); 
    
    

//     const makeChanges = () => {
//         genre.textContent = 'драма';
    
//         poster.style.backgroundImage = "url('img/bg.jpg')";
//     };

//     makeChanges();

//     const sortArr = (arr) => {
//         arr.sort();
//     };
    
    // sortArr(movieDB.movies);
    
        
       
//     function createMovieList (films, parent) {
//         parent.innerHTML = ""; 
//         sortArr(films); 

//         films.forEach((film, i) => {
//             parent.innerHTML +=`
//                 <li class="promo__interactive-item">${i + 1} ${film}
//                     <div class="delete"></div>
//                 </li>
//             `;
//         });

        
        // document.querySelectorAll('.delete').forEach((btn, i) => {
        //     btn.addEventListener('click', () => {
        //         btn.parentElement.remove();
        //         movieDB.movies.splice(i, 1);

        //         createMovieList(films, parent);
        //     });
        // });
//     }  
    
//     createMovieList(movieDB.movies, movieList);

// });


// const btns = document.querySelectorAll("button"),
//       wrapper = document.querySelector('.btn-block');  
// console.log(btns[0].classList.length); 
// console.log(btns[0].classList.item(0)); 
// console.log(btns[1].classList.add("red")); 
// console.log(btns[0].classList.remove("blue")); 
// console.log(btns[0].classList.toggle("blue")); 

// if (btns[1].classList.contains("red")) {
//     console.log('red');
// }

// btns[0].addEventListener('click', () => {
    // if(!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }
//     btns[1].classList.toggle('red');
// });

// wrapper.addEventListener('click', (e) => {
//     if (e.target && e.target.matches('button.red')) {
//         console.log('hello!');
//     }
// });

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('hello!');
//     }); 
// });

// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn);

// window.addEventListener('DOMContentLoaded', () => {

//     let tabs = document.querySelectorAll('.tabheader__item'),
//         tabsContent = document.querySelectorAll('.tabcontent'),
//         tabsParent = document.querySelector('.tabheader__items');
    
//     function hideTabContent() {
//         tabsContent.forEach(i => {
//             i.classList.add('hide');
//             i.classList.remove('show', 'fade');
//         });

//         tabs.forEach (i => {
//             i.classList.remove('tabheader__item_active');
//         });
//     }


//       tabs.forEach(item => {
//           item.classList.remove('tabheader__item_active');
//       });

      

//     function showTabContent(i = 0) {
//         tabsContent[i].classList.add('show', 'fade');
//         tabsContent[i].classList.remove('hide');
//         tabs[i].classList.add('tabheader__item_active');

//     }

//     hideTabContent();
//     showTabContent();



//     tabsParent.addEventListener('click', (e) => {
//         const target = e.target;

//         if(target && target.classList.contains('tabheader__item')) {
//             tabs.forEach((item, i) => {
//                 if (target == item) {
//                   hideTabContent();
//                   showTabContent(i);
//                 } 
//             });
          
//         }

//     });

// });

// const btn = document.querySelector('.btn');
//   let timerId;
//       i = 0;

// function myAnimation () {
//     const elem = document.querySelector('.box');
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame () {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + 'px';
//         }
//     }
// }

// btn.addEventListener('click', myAnimation);

// btn.addEventListener('click', () => {
//     timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 500);
// });

// function logger () {
//     if(i === 3) {
//         clearInterval(timerId);
//     }
//     console.log("text");
//     i++;
// }

// let id = setTimeout(function log(){
//     console.log('Hello!');
//     id = setTimeout(log, 500);
    
// }, 500);

// const now = new Date(1634324313468);
// new Date.parse('1634324313468')

// console.log(Data);

// console.log(now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());

// console.log(now.getTime());

// let start = new Date();

// for (let i = 0; i < 100000; i++) {
//     let some = i ** 3;
// } 

// let end = new Date();


// alert(`Цикл отработал за ${start - end} секунд`);

// const box = document.querySelector('.box'),
//       btn = document.querySelector('button');  

// const width = box.clientWidth;
// const height = box.clientHeight;
// const width = box.offsetWidth;
// const height = box.offsetHeight;
// const width = box.scrollWidth;
// const height = box.scrollHeight;

// console.log(width, height);

// btn.addEventListener('click', () => {
//     // box.style.height = box.scrollHeight + 'px';
//     console.log(box.scrollTop);
// });

// console.log(box.getBoundingClientRect().top);

// const style = window.getComputedStyle(box);

// console.log(style.display);

// console.log(document.documentElement.scrollTop);

// window.scrollBy(0, 400);

// window.scrollTo(0, 400);

// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     this.human = true;
//     this.hello = function () {
//         console.log(`Hello ${this.name}`);
//     };
// }

// User.prototype.exit = function () {
//     console.log(`Пользователь ${this.name} ушел`);
// };

// const ivan = new User('Ivan', 25);
// const alex = new User('Alex', 34);

// ivan.exit();

// console.log(ivan);
// ivan.hello();
// console.log(alex);
// alex.hello();



// class User {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//         this.human = true;
//     }
//     hello() {
//         console.log(`Hello ${this.name}`);
//     }
//     exit() {
//         console.log(`Пользователь ${this.name} ушел`);
//     }
// }

// const ivan = new User('Ivan', 25);
// const alex = new User('Alex', 34);

// console.log(ivan);
// alex.exit();



// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         return a + b;
//     }

//     console.log(sum());
// }

// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         console.log();
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };

// obj.sum();

// function User(name, age) {
//         this.name = name;
//         this.age = age;
//         this.human = true;
//         this.hello = function () {
//             console.log(`Hello ${this.name}`);
//     };
// }

// const ivan = new User('Ivan', 25);
// const alex = new User('Alex', 34);

// console.log(ivan);
// alex.exit();

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'

// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this*num;

// }

// const double = count.bind(2);

// console.log(double(2));
// console.log(double(13));

// const btn = document.querySelector('batton');

// btn.addEventListener('click', function () {
//     this.style.backgroundColor = 'red';
// }); 

// const obj = {
//     num: 5,
//     sayNumber: function() {
//         const say = () => {
//             console.log(this.num);
//         };
//         say();
//     }
// }

// obj.sayNumber();

// const double = a => a * 2;

// console.log(double(4));

// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     } 
//     calcArea() {
//         return this.height * this.width;
//     }
// }

// const square = new Rectangle(5, 20);
// const long = new Rectangle(44,6);

// console.log(square.calcArea());
// console.log(long.calcArea());

// class ColoredRectangleWithText extends Rectangle {
//     constructor(height, width, text, bgColour) {
//         super(height, width);
//         this.text = text;
//         this.bgColour = bgColour;
//     }
//     showMyProps() {
//         return(`Текс: ${this.text}, цвет: ${this.bgColour}`);
//     }
// }

// const superSquare = new ColoredRectangleWithText(20, 11, 'Hello world!', 'red');

// console.log(superSquare.showMyProps());
// console.log(superSquare.calcArea());




window.addEventListener('DOMContentLoaded', () => {

    // tabs

    let tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');
    
    function hideTabContent() {
        tabsContent.forEach(i => {
            i.classList.add('hide');
            i.classList.remove('show', 'fade');
        });

        tabs.forEach (i => {
            i.classList.remove('tabheader__item_active');
        });
    }


      tabs.forEach(item => {
          item.classList.remove('tabheader__item_active');
      });

      

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');

    }

    hideTabContent();
    showTabContent();



    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if(target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                  hideTabContent();
                  showTabContent(i);
                } 
            });
          
        }

    });

    // Timer

    const deadLine = '2021-12-31';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date());
           days = Math.floor(t / (1000 * 60* 60* 24)),
          hours = Math.floor((t / (1000 * 60* 60) % 24)),
        minutes = Math.floor((t / 1000 / 60) % 60),
        seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector('.timer'),
               days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),  
            seconds = timer.querySelector('#seconds'),
       timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

                days.innerHTML = getZero(t.days);
                hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }

        }
    }

    setClock('.timer', deadLine);

// Modal

    const modalTrigger = document.querySelectorAll('[data-model]'),
                 modal = document.querySelector('.modal'),
         modalCloseBtn = document.querySelector('[data-close]');
         
         function openModal() {
            modal.classList.add('show');
            modal.classList.remove('hide');
            // modal.classList.toggle('show');
            document.body.style.overflow = 'hidden';
            clearInterval(modalTimerId);
        }

         modalTrigger.forEach(e => {
            e.addEventListener('click', openModal);
        });

        function closeModal() {
            modal.classList.add('hide');
            modal.classList.remove('show');
            // modal.classList.toggle('show');
            document.body.style.overflow = '';
        }

        modalCloseBtn.addEventListener('click', closeModal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape' && modal.classList.contains('show')) {
                closeModal();
            }
        });

        const modalTimerId = setTimeout(openModal, 6000);

        function showModalByScroll() {
            if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
                openModal();
                window.removeEventListener('scroll', showModalByScroll);
            }
        }

        window.addEventListener('scroll', showModalByScroll);

        class MenuCard {
            constructor(src, alt, title, descr, price, parentSelector) {
                this.src = src;
                this.alt = alt;
                this.title = title;
                this.descr = descr;
                this.price  =price;
                this.parent = document.querySelector(parentSelector);
                this.transfer = 27;
                this.changeToUAH();
            }
            changeToUAH() {
                this.price = this.price * this.transfer;
            }
            render() {
                const element = document.createElement('div');
                element.innerHTML = `
                    <div class="menu__item">
                        <img src=${this.src} alt=${this.alt}>
                        <h3 class="menu__item-subtitle">${this.title}</h3>
                        <div class="menu__item-descr">${this.descr}</div>
                        <div class="menu__item-divider"></div>
                        <div class="menu__item-price">
                            <div class="menu__item-cost">Цена:</div>
                            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                        </div>
                    </div>
                `;
                this.parent.append(element);
            }
        }

        new MenuCard(
            "img/tabs/vegy.jpg",
            "vegy",
            'Меню "Фитнес"',
            'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
            9,
            '.menu .container'

        ).render();

        new MenuCard(
            "img/tabs/elite.jpg",
            "elite",
            'Меню “Премиум”',
            'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
            14,
            '.menu .container'

        ).render();

        new MenuCard(
            "img/tabs/post.jpg",
            "post",
            'Меню "Постное"',
            'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
            21,
            '.menu .container'

        ).render();
});



















