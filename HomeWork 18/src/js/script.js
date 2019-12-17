// require('es6-promise').polyfill(); //подключаю полифил для промисов
require('nodelist-foreach-polyfill'); //подключаю полифил для forEach 
require('formdata-polyfill'); //полифил formData

window.addEventListener('DOMContentLoaded', function () { //после загрузки DOM-дерева назначаем событие

    "use strict";
    let calc = require('./parts/calc.js'),
        form = require('./parts/form.js'),
        slider = require('./parts/slider.js'),
        tabs = require('./parts/tabs.js'),
        timer = require('./parts/timer.js'),
        modal = require('./parts/modal.js');

    calc();
    form();
    slider();
    tabs();
    timer();
    modal();
});

// //код для полифила forEach
// if ('NodeList' in window && !NodeList.prototype.forEach) {
//     console.info('polyfill for IE11');
//     NodeList.prototype.forEach = function (callback, thisArg) {
//       thisArg = thisArg || window;
//       for (var i = 0; i < this.length; i++) {
//         callback.call(thisArg, this[i], i, this);
//       }
//     };
//   }