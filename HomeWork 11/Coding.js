// {
//     const ARR = [5, 6];
//     ARR.push(7);
//     console.log(ARR); // [5,6,7]
//     ARR = '10'; // TypeError
//     ARR[0] = 3; // значение можно менять
//     console.log(ARR); // [3,6,7]
// }

// let w = new WeakMap();
// //w.set('a', 'b');
// // Uncaught TypeError: Invalid value used as weak map key

// var o1 = {},
//     o2 = function(){},
//     o3 = {};

// w.set(o1, 37);
// w.set(o2, "azerty");
// w.set(o3, undefined);
// console.log(w.get(o1));
// w.get(o3); // undefined, потому что это заданное значение

// w.has(o1); // true
// w.delete(o1);
// w.has(o1); // false


// 'use strict';
// let alf = 'алфавит';
// console.log(alf);
// alf.toUpperCase();
// console.log(alf);

// let bar = "алфавит";
// console.log(bar);               
// bar.toUpperCase();
// console.log(bar);

class Car {
    constructor() {
        console.log("Создаём новый автомобиль");
    }
}

class Porsche extends Car {
    constructor() {
        //super();
        console.log("Создаём Porsche");
    }
}

let c = new Porsche();
// Создаём новый автомобиль
// Создаём Porsche