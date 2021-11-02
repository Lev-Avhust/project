/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

    /***/ './js/modules/calc.js':
    /*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
    /***/ ((module) => {

      function calc() {

        const result = document.querySelector('.calculating__result span');
        let sex = 'female';
        let height;
        let weight;
        let age;
        let ratio = 1.375;

        if (localStorage.getItem('sex')) {
          sex = localStorage.getItem('sex');
        } else {
          sex = 'female';
          localStorage.setItem('sex', 'female');
        }

        if (localStorage.getItem('ratio')) {
          sex = localStorage.getItem('ratio');
        } else {
          sex = 1.375;
          localStorage.setItem('ratio', 1.375);
        }

        function innitLoclaSettings(selector, activeClass) {
          const elements = document.querySelectorAll(selector);

          elements.forEach(elem => {
            elem.classList.remove(activeClass);
            if (elem.getAttribute('id') === localStorage.getItem('sex')) {
              elem.classList.add(activeClass);
            }

            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
              elem.classList.add(activeClass);
            }
          });
        }

        innitLoclaSettings('#gender div', 'calculating__choose-item_active');
        innitLoclaSettings('.calculating__choose_big div', 'calculating__choose-item_active');

        function calcTotal() {
          if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = '____';
            return;
          }

          if (sex === 'female') {
            result.textContent = Math.round((447,6 + (9.2 * weight) + (3.1 * height) - (4.3 * age) ) * ratio);
          } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age) ) * ratio);
          }

        }

        calcTotal();

        function getStaticInformation(selector, activeClass) {
          const elements = document.querySelectorAll(`${selector} div`);

          elements.forEach(elem => {
            elem.addEventListener('click', (e) => {
              if (e.target.getAttribute('data-ratio')) {
                ratio = +e.target.getAttribute('data-ratio');

                localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
              } else {
                sex = e.target.getAttribute('id');
                localStorage.setItem('sex', e.target.getAttribute('id'));
          
              }

              elements.forEach(elem => {
                elem.classList.remove(activeClass);
              });

              e.target.classList.add(activeClass);

              calcTotal();
            });
          });
        }

        getStaticInformation('#gender', 'calculating__choose-item_active');
        getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active');

        function getDynamicInformation(selector) {
          const input = document.querySelector(selector);

          input.addEventListener('input', () => {

            if (input.value.match(/\D/g)) {
              input.style.border = '1px solid red';
            } else {
              input.style.border = 'none';
            }

            switch(input.getAttribute('id')) {
            case 'height':
              height = +input.value;
              break;
            case 'weight':
              weight = +input.value;
              break;
            case 'age':
              age = +input.value;
              break;
            }

            calcTotal();
          });
        }

        getDynamicInformation('#height');
        getDynamicInformation('#weight');
        getDynamicInformation('#age');
      }

      module.exports = calc;

      /***/ }),

    /***/ './js/modules/cards.js':
    /*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
    /***/ ((module) => {

      function cards() {

        class MenuCard {
          constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price  = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
          }
          changeToUAH() {
            this.price = this.price * this.transfer;
          }
          render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
              this.element = 'menu__item';
              element.classList.add(this.element);
            } else {
              this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                        <img src=${this.src} alt=${this.alt}>
                        <h3 class="menu__item-subtitle">${this.title}</h3>
                        <div class="menu__item-descr">${this.descr}</div>
                        <div class="menu__item-divider"></div>
                        <div class="menu__item-price">
                            <div class="menu__item-cost">Цена:</div>
                            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                        </div>
                `;
            this.parent.append(element);
          }
        }

        const getResourse = async (url) => {
          const res = await fetch(url);

          if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
          }

          return await res.json();
        };

        axios.get('http://localhost:3000/menu')
          .then(data => {
            data.data.forEach(({img, altimg, title, descr, price}) => {
              new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
            });
          });
      }

      module.exports = cards;

      /***/ }),

    /***/ './js/modules/forms.js':
    /*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
    /***/ ((module) => {

      function forms() {

        const forms = document.querySelectorAll('form');

        const message = {
          loading: 'img/form/spinner.svg',
          success: 'Спасибо! Скоро мы с вами свяжемся',
          failure: 'Что-то пошло не так..'
        };

        forms.forEach(item => {
          bindPostData(item);
        });

        const postData = async (url, data) => {
          const res = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: data
          });

          return await res.json();
        };

        function bindPostData(form) {
          form.addEventListener('submit', (e) => {
            e.preventDefault();

            const form = document.querySelector('.modal__content form');
            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                    display: block;
                    margin: 0 auto;
                `;
            form.insertAdjacentElement('afterend', statusMessage);

                 

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
              .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
              }).catch(() => {
                showThanksModal(message.failure);
              }).finally(() => {
                form.reset();
              });

          });
        }

        function showThanksModal(message) {
          const prevModalDialog = document.querySelector('.modal__dialog');

          prevModalDialog.classList.add('hide');
          openModal();

          const thanksModal = document.createElement('div');
          thanksModal.classList.add('modal__dialog');
          thanksModal.innerHTML = `
        <div class="modal__content">
        <div class="modal__close data-close">&times;</div>
        <div class="modal__title">${message}</div>
        <div/>
    `;

          document.querySelector('.modal').append(thanksModal);
          setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
          }, 3000);
        }
        fetch('http://localhost:3000/menu')
          .then(data => data.json());
    
      }

      module.exports = forms;

      /***/ }),

    /***/ './js/modules/modal.js':
    /*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
    /***/ ((module) => {

      function modal() {
  
        const modalTrigger = document.querySelectorAll('[data-model]'),
          modal = document.querySelector('.modal');
        
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

        modal.addEventListener('click', (e) => {
          if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal();
          }
        });

        document.addEventListener('keydown', (e) => {
          if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
          }
        });

        const modalTimerId = setTimeout(openModal, 50000);

        function showModalByScroll() {
          if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
          }
        }

        window.addEventListener('scroll', showModalByScroll);
      }

      module.exports = modal;

      /***/ }),

    /***/ './js/modules/slider.js':
    /*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
    /***/ ((module) => {

      function slider() {

        let slideIndex = 1;
        let offSet = 0;

        const slides = document.querySelectorAll('.offer__slide');
        const slider = document.querySelector('.offer__slider');
        const prev = document.querySelector('.offer__slider-prev');
        const next = document.querySelector('.offer__slider-next');
        const totoal = document.querySelector('#total');
        const current = document.querySelector('#current');
        const slidesWrapper = document.querySelector('.offer__slider-wrapper');
        const slidesFiels = document.querySelector('.offer__slider-inner');
        const width = window.getComputedStyle(slidesWrapper).width;

        if (slides.length < 10) {
          totoal.textContent = `0${slides.length}`;
          current.textContent = `0${slideIndex}`;
        } else {
          totoal.textContent = slides.length;
          current.textContent = slideIndex;
        }

        slidesFiels.style.width = 100 * slides.length + '%';
        slidesFiels.style.display = 'flex';
        slidesFiels.style.trasition = '0.5s all';

        slidesWrapper.style.overflow = 'hidden';


        slides.forEach(slide => {
          slide.style.width = width;
        });

        slider.style.position = 'relative';

        const indicators = document.createElement('ol');
        const dots = [];

        function dotManipulator(dots) {
          dots.forEach(dot => dot.style.opacity = '.5');
          dots[slideIndex - 1].style.opacity = 1;
        }

        function indexManipulator(slides) {
          if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
          } else {
            current.textContent = slideIndex;
          }
        }

        indicators.classList.add('carousel-indicators');
        indicators.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
  `;
        slider.append(indicators);

        for(let i = 0; i < slides.length; i++) {
          const dot = document.createElement('li');
          dot.setAttribute('data-slide-to', i + 1);
          dot.style.cssText = `
    box-sizing: content-box;
    flex: 0 1 auto;
    width: 30px;
    height: 6px;
    margin-right: 3px;
    margin-left: 3px;
    cursor: pointer;
    background-color: #fff;
    background-clip: padding-box;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: .5;
    transition: opacity .6s ease;
    `;

          if (i == 0) {
            dot.style.opacity = 1;
          }
          indicators.append(dot);
          dots.push(dot);
        }

        function deleteNotDiggits(str) {
          return +str.replace(/\D/g, '');
        }

        next.addEventListener('click', () => {
          if (offSet == deleteNotDiggits(width) * (slides.length - 1)) {
            offSet = 0;
          } else {
            offSet += deleteNotDiggits(width);
          }

          slidesFiels.style.transform = `translateX(-${offSet}px)`;

          if (slideIndex == slides.length) {
            slideIndex = 1;
          } else {
            slideIndex++;
          }

          if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
          } else {
            current.textContent = slideIndex;
          }

          dotManipulator(dots);
        });

        prev.addEventListener('click', () => {
          if (offSet == 0) {
            offSet = deleteNotDiggits(width) * (slides.length - 1);
          } else {
            offSet -= deleteNotDiggits(width);
          }

          slidesFiels.style.transform = `translateX(-${offSet}px)`;

          if (slideIndex == 1) {
            slideIndex = slides.length;
          } else {
            slideIndex--;
          }

          indexManipulator(slides);

          dotManipulator(dots);
        });

        dots.forEach(dot => {
          dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offSet = deleteNotDiggits(width) * (slideTo - 1);

            slidesFiels.style.transform = `translateX(-${offSet}px)`;

            indexManipulator(slides);

            dotManipulator(dots);
          });
        });
  
      }

      module.exports = slider;

      /***/ }),

    /***/ './js/modules/tabs.js':
    /*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
    /***/ ((module) => {

      function tabs() {

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
      }

      module.exports = tabs;

      /***/ }),

    /***/ './js/modules/timer.js':
    /*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
    /***/ ((module) => {

      function timer() {
  
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
      }

      module.exports = timer;

      /***/ })

    /******/ 	});
  /************************************************************************/
  /******/ 	// The module cache
  /******/ 	var __webpack_module_cache__ = {};
  /******/
  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
    /******/ 		// Check if module is in cache
    /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
    /******/ 		if (cachedModule !== undefined) {
      /******/ 			return cachedModule.exports;
      /******/ 		}
    /******/ 		// Create a new module (and put it into the cache)
    /******/ 		var module = __webpack_module_cache__[moduleId] = {
      /******/ 			// no module.id needed
      /******/ 			// no module.loaded needed
      /******/ 			exports: {}
      /******/ 		};
    /******/
    /******/ 		// Execute the module function
    /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/
    /******/ 		// Return the exports of the module
    /******/ 		return module.exports;
    /******/ 	}
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
    window.addEventListener('DOMContentLoaded', () => {

      const tabs = __webpack_require__(/*! ./modules/tabs */ './js/modules/tabs.js');
      const modal = __webpack_require__(/*! ./modules/modal */ './js/modules/modal.js');
      const timer = __webpack_require__(/*! ./modules/timer */ './js/modules/timer.js');
      const cards = __webpack_require__(/*! ./modules/cards */ './js/modules/cards.js');
      const calc = __webpack_require__(/*! ./modules/calc */ './js/modules/calc.js');
      const forms = __webpack_require__(/*! ./modules/forms */ './js/modules/forms.js');
      const slider = __webpack_require__(/*! ./modules/slider */ './js/modules/slider.js');

      tabs();
      modal();
      timer();
      cards();
      calc();
      forms();
      slider();
    });

  })();

/******/ })()
;
//# sourceMappingURL=bundle.js.map