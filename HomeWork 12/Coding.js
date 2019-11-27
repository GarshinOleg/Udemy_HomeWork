// // class GreatPerson extends Person {
// //     constructor(name, phrase) {
// //       super(name);
// //       this.phrase = phrase;
// //     }
// //     sayPhrase() {
// //       console.log(`${this.name} says: "${this.phrase}"`)
// //     }
// //   }
  
// //   const jane = new GreatPerson('Jane', 'Hello, World!');
// //   jane.sayName(); // Person Jane said his name
// //   jane.sayPhrase(); // Jane says: "Hello, World!"

// //'use strict';
// // let user = {
// //   get fullName() {
// //     return `...`;
// //   }
// // };
// // user.fullName = "Тест";

// let user = {
//   name: "John",
//   surname: "Smith",

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },

//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   }
// };

// // set fullName запустится с данным значением
// user.fullName = "Alice Cooper";

// alert(user.name); // Alice
// alert(user.surname); // Cooper

function beginAdding(a) {
  a *= 5;
  return function (b) {
  console.log(a + b);
  }
  }
  const add = beginAdding(10);
  console.log(add);
  console.log(typeof(add));
  //add(20);