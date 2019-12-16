/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
    //Калькулятор на сайте
    let persons = document.querySelectorAll('.counter-block-input')[0], //поле Количество людей
        restDays = document.querySelectorAll('.counter-block-input')[1], //поле На сколько дней
        place = document.getElementById('select'), //выбор базы отдыха
        totalValue = document.getElementById('total'), //ощая сумма
        personsSum = 0, //переменная для Количество людей
        daysSum = 0, //переменная Количество дней
        total = 0; //переменная общей суммы

    totalValue.innerHTML = 0; //зануляем сумму на сайте

    persons.addEventListener('change', function () { //при вводе в поле Количество людей считается сумма, с проверка ненулевого второго поля
        personsSum = +this.value;
        total = (personsSum + daysSum) * 4000;

        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    restDays.addEventListener('change', function () { //при вводе в поле На сколько дней считается сумма, с проверка ненулевого второго поля
        daysSum = +this.value;
        total = (personsSum + daysSum) * 4000;

        if (persons.value == '' || restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    place.addEventListener('change', function () { //изменение суммы при выборе базы
        if (restDays.value == '' || persons.value == '') { //если какое то из полей пустые - занулять сумму
            totalValue.innerHTML = 0;
        } else {
            let a = total; //сумма, но она идет в качестве переменной, так что каждый раз будет такая же
            totalValue.innerHTML = a * this.options[this.selectedIndex].value; //умножаем сумму на К-т базы
        }
    });
}
module.exports = calc; //экспортируем модуль

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

//Form ---------------------серверные запросы------------------------------------------------------------------
function form() {
    //объект с сообщениями выполнения запросов
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    //работаем с формой обратной связи 
    let form = document.querySelector('.main-form'), //сама форма
        input = form.getElementsByTagName('input'), //поле ввода
        statusMessage = document.createElement('div'); //новый раздел, где будем писать о статусе запроса(снизу формы)
    statusMessage.classList.add('status'); //добавляем класс СТАТУС к новому разделу в форме

    //функция для очистки полей
    function clearInput() {
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
        //alert('Поля очистились!');
    }

    form.addEventListener('submit', function (event) { //при нажатии на отправить - форма отправляется

        event.preventDefault(); //чтобы страница не обновлялась(убираем стандартное поведение браузера)
        form.appendChild(statusMessage); //добавляем в форму наш div

        function smartRequest() { //описываем функцию "умного" запроса через промисы
            return new Promise(function (resolve, reject) {
                let request = new XMLHttpRequest(); //начинаем описывать и отправлять запрос
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

                let formData = new FormData(form); //создаем объект formData

                //превращаем formData в JSON-объект
                let obj = {}; //создаем пустой JS-объект
                formData.forEach(function (value, key) {
                    obj[key] = value; //методом forEach вносим из formData в пустой JS-объект значения ключ-значение(поле формы - значение)
                });
                let json = JSON.stringify(obj); //превращаем наш JS-объект в JSON-объект

                request.send(json); //отправляем JSON-объект

                request.addEventListener('readystatechange', function () { //показ в сообщении статуса запроса
                    statusMessage.innerHTML = message.loading; //"загрузка", если еще не загрузился
                    if (request.readyState === 4) {
                        if (request.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    }
                });
            }); //конец промиса            

        } //конец функции smartRequest 

        smartRequest(form) //запускаем функцию smartRequest
            .then(() => statusMessage.innerHTML = message.success) //в случае успеха промиса
            .then(clearInput) //чистим поля
            .catch(() => statusMessage.innerHTML = message.failure); //в случае провала промиса
        //clearInput(); 
    }); //конец прослушивателя формы

    //по заданию для контактной формы !!! -------------------!---------------------------------
    let contactForm = document.querySelector('#form'), //сама контакная форма(та, что снизу)
        contactInput = contactForm.getElementsByTagName('input'); //поле ввода для контакной формы

    contactForm.addEventListener('submit', function (event) { //при нажатии на отправить - форма отправляется
        event.preventDefault(); //чтобы страница не обновлялась(убираем стандартное поведение браузера)

        contactForm.appendChild(statusMessage); //добавляем в форму наш div

        function smartRequestContact() { //описываем функцию "умного" запроса через промисы
            return new Promise(function (resolve, reject) {
                let request = new XMLHttpRequest(); //начинаем описывать и отправлять запрос
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

                let formData = new FormData(contactForm); //создаем объект formData

                //превращаем formData в JSON-объект
                let obj = {}; //создаем пустой JS-объект
                formData.forEach(function (value, key) {
                    obj[key] = value; //методом forEach вносим из formData в пустой JS-объект значения ключ-значение(поле формы - значение)
                });
                let json = JSON.stringify(obj); //превращаем наш JS-объект в JSON-объект

                request.send(json); //отправляем JSON-объект

                request.addEventListener('readystatechange', function () { //показ в сообщении статуса запроса
                    statusMessage.innerHTML = message.loading; //"загрузка", если еще не загрузился
                    if (request.readyState === 4) {
                        if (request.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    }
                });

            }); //конец промиса

        } //конец функции smartRequest 

        function clearInputContact() {
            for (let i = 0; i < contactInput.length; i++) {
                contactInput[i].value = '';
            }
            //alert('Поля очистились!');
        }

        smartRequestContact() //запускаем функцию smartRequest
            .then(() => statusMessage.innerHTML = message.success) //в  случае успеха промиса
            .then(clearInputContact) //чистим поля
            .catch(() => statusMessage.innerHTML = message.failure); //в  случае провала промиса
        //clearInput();
        //.finally(() => alert('сработало finally!')) 

    }); //конец прослушивателя формы
}
module.exports = form; //экспортируем модуль

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

//Modal окно при нажатии кнопки "Унать больше" под таймером
function modal() {
    let more = document.querySelector('.more'), //получаем форму "узнать больше"
        overlay = document.querySelector('.overlay'), //получаем анимацию открытия
        close = document.querySelector('.popup-close'); //получаем крестик "закрыть"

    more.addEventListener('click', function () { //при нажатии на кнопку "Унать больше"
        overlay.style.display = 'block'; //развернуть форму
        this.classList.add('more-splash'); //анимация открытия
        document.body.style.overflow = 'hidden'; //отключаем прокрутку страницы на заднем фоне
    });

    close.addEventListener('click', function () { //при нажатии на крестик сверху справа в форме
        overlay.style.display = 'none'; //закрываем/убираем форму
        more.classList.remove('more-splash'); //отключаем анимацию открытия (окно закроется мгновенно)
        document.body.style.overflow = ''; //включаем прокрутку страницы на заднем фоне
    });

    //Modal окно при нажатии кнопки "Унать подробнее" внизу контента
    let descriptionbtn = document.querySelectorAll('.description-btn'); //массив кнопок "узнать подробнее"

    //перебираем все 4 кнопки "узнать подробнее" и назначаем на каждую прослушиватель как у кнопки "узнать больше"
    descriptionbtn.forEach(function (item) {
        item.addEventListener('click', function () {
            overlay.style.display = 'block'; //развернуть форму
            more.classList.add('more-splash'); //анимация открытия
            document.body.style.overflow = 'hidden'; //отключаем прокрутку страницы на заднем фоне
            //а обработка крестика уже функционирует выше!
        });
    });
}
module.exports = modal; //экспортируем модуль

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
    //Slider ----------------------------------------------- Slider ------------------------------------------------
    let slideIndex = 1, //индекс текущего слайда
        slides = document.querySelectorAll('.slider-item'), //сами слайды
        prev = document.querySelector('.prev'), //стрелочка НАЗАД
        next = document.querySelector('.next'), //стрелочка ВПЕРЕД
        dotsWrap = document.querySelector('.slider-dots'), //обёртка точек слайдера(тот раздел, где точки)
        dots = document.querySelectorAll('.dot'); //сами точки

    showSlides(slideIndex); //запускаем показ слайдов

    function showSlides(n) {
        if (n > slides.length) { //чтобы перематывалось в начало, если дошло до конца
            slideIndex = 1;
        }
        if (n < 1) { //чтобы перематывалось в конец, если нажали стрелку НАЗАД, когда стоит первый слайд
            slideIndex = slides.length;
        }
        slides.forEach((item) => item.style.display = 'none'); //сначала скрываем все слайды
        dots.forEach((item) => item.classList.remove('dot-active')); //убираем "активность" с любых точек
        slides[slideIndex - 1].style.display = 'block'; //показываем нужный слайд(сначала первый)
        dots[slideIndex - 1].classList.add('dot-active'); //активируется нужная точка(она становится черной и ее не видно)
    }

    function plusSlides(n) { //показ следующего слайда
        showSlides(slideIndex += n);
    }

    function currentSlide(n) { //показ текущего слайда
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function () { //при нажатии на стрелку НАЗАД - показ прдыдущего слайда
        plusSlides(-1);
    });
    next.addEventListener('click', function () { //при нажатии на стрелку ВПЕРЕД - показ следующего слайда
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function (event) { //при клике на точке - показывается соответствующий слайдер
        for (let i = 0; i < dots.length + 1; i++) { //перебираем все слайдеры
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) { //делегирование, i-1, потому что  slideIndex д.б. от 1 до 4, это номер слайда, а не индекс массива
                currentSlide(i); //показать нужный слайдер
            }
        }
    });
}
module.exports = slider; //экспортируем модуль

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
    let tab = document.querySelectorAll('.info-header-tab'), //все табы с .info-header-tab
        info = document.querySelector('.info-header'), //элемент-родитель .info-header
        tabContent = document.querySelectorAll('.info-tabcontent'); //тексты к табам .info-tabcontent

    function hideTabContent(a) { //функция, скрывающая контент табов(для начала)
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1); //скрыли 2-4 таб, первый остался видимым (0-ой, который, по массивам)

    function showTabContent(b) { //показываем содержимое табов
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) { //при клике на определенный таб - показываем определенный контент ЕСЛИ ПРОЩЕ, то мы определяем НОМЕР ткнутого таба, скрываем все контенты, а затем показываем только нужный[i-ый] контент, совпадающий по номеру с ткнутым табом
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) { //если ткнули в элемент(существующий) и этот элемент ТОТ
            for (let i = 0; i < tab.length; i++) { //итерируем по всем табам
                if (target == tab[i]) { //к кликнутому пользователем элементу подобрали через итерацию нужный таб: 
                    //                    РАЗВЁРНУТО: И дальше мы реализуем такую логику, что при клике на блок с классом info-header:
                    // 1) идет проверка, что мы попали в блок, содержащий класс info-header-tab + то, что этот элемент вообще поддерживает событие клика ( if (target && target.classList.contains('info-header-tab')) { )
                    // 2) Запускаем цикл, чтобы прогнать все табы по порядку (for(let i = 0; i < tab.length; i++))
                    // 3) Теперь внутри цикла в условии мы проверяем что тот таб, в который тыкнул пользователь совпадает с итерируемым. И когда это условие выполнится - мы запускаем функцию показа именного этого таба. ( if (target == tab[i]) { )
                    hideTabContent(0); //скрывает все табы, чтобы потом показать один, требуемый
                    showTabContent(i); //показываем нужный таб
                    break; //когда нашли и всё сделали, выходим из цикла, чтобы не проверять остальные, заведомо неподходящие варианты
                }
            }
        }
    });
}
module.exports = tabs; //экспортируем модуль

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
    //Timer
    let deadline = '2019-12-31 07:00';

    function getTimeRemainig(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()), //сколько осталось до дедлайна
            seconds = Math.floor((t / 1000) % 60), //получаем количество целых секунд
            minutes = Math.floor((t / 1000 / 60) % 60), //получаем количество целых минут
            hours = Math.floor((t / 1000 / 60 / 60) % 24), //получаем количество целых часов
            days = Math.floor((t / 1000 / 60 / 60 / 24)); //получаем количество целых дней, чтобы показывались дни до дедлайна

        return { //возвращаем объект с данными об оставшемся до дедлайна времени
            'total': t, //все время в миллисекундах
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours,
            'days': days
        };
    }

    function setClock(id, endtime) { //получаем данные на HTML странице
        let timer = document.getElementById(id),
            days = timer.querySelector('.days'), //добавляю дни
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timerInterval = setInterval(updateClock, 1000);

        function updateClock() { //обновляем цифры на странице
            let t = getTimeRemainig(endtime); //записываем в t весь объект с временными параметрами
            days.textContent = t.days; //обновляем дни на странице, 0 в начале ставить НЕ надо
            if (t.hours >= 10) { //если количество часов больше или равно 10
                hours.textContent = t.hours; //то вставляем в блок без изменений
            } else { //если 9 и меньше(т.е. одна цифра)
                hours.textContent = '0' + t.hours; //то добавляем в начало 0
            }
            if (t.minutes >= 10) { //если количество часов больше или равно 10
                minutes.textContent = t.minutes; //то вставляем в блок без изменений
            } else { //если 9 и меньше(т.е. одна цифра)
                minutes.textContent = '0' + t.minutes; //то добавляем в начало 0
            }
            if (t.seconds >= 10) { //если количество часов больше или равно 10
                seconds.textContent = t.seconds; //то вставляем в блок без изменений
            } else { //если 9 и меньше(т.е. одна цифра)
                seconds.textContent = '0' + t.seconds; //то добавляем в начало 0
            }

            if (t.total <= 0) { //если время вышло
                clearInterval(timerInterval); //останавливаем таймер
                days.textContent = '0'; //ставим нули на местах цифр времени
                hours.textContent = '00'; //ставим нули на местах цифр времени
                minutes.textContent = '00'; //ставим нули на местах цифр времени
                seconds.textContent = '00'; //ставим нули на местах цифр времени
            }

        }
    }

    setClock('timer', deadline); //запускаем таймер (и весь процесс)
}
module.exports = timer; //экспортируем модуль

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () { //после загрузки DOM-дерева назначаем событие

    "use strict";
    let calc = __webpack_require__(/*! ./parts/calc.js */ "./src/js/parts/calc.js"),
        form = __webpack_require__(/*! ./parts/form.js */ "./src/js/parts/form.js"),
        slider = __webpack_require__(/*! ./parts/slider.js */ "./src/js/parts/slider.js"),
        tabs = __webpack_require__(/*! ./parts/tabs.js */ "./src/js/parts/tabs.js"),
        timer = __webpack_require__(/*! ./parts/timer.js */ "./src/js/parts/timer.js"),
        modal = __webpack_require__(/*! ./parts/modal.js */ "./src/js/parts/modal.js");

    calc();
    form();
    slider();
    tabs();
    timer();
    modal();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map