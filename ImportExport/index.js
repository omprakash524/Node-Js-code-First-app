// const add = require('./operator');
// const getName = require('./operator');

const operator = require('./operator');

console.log(operator.add(3,4));
console.log(operator.sub(5,89));
console.log(operator.name);
// console.log(operator.getName);

// what is object destructuring ?
// Object destructuring in JavaScript is a convenient way to extract properties from objects. It allows you to unpack values from arrays or objects into distinct variables
// const person = {
//     name : 'omprakash',
//     age: 22,
//     city : 'Samastipur'
// };

// // Destructuring the person object
// const {name,age,city} = person;
// console.log(name);
// console.log(age);
// console.log(city);

// Here we are using object destructuring
const {add,sub,name} = require('./operator');
console.log(add(54,6));
console.log(sub(54,6));
console.log(name);