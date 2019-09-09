// Unpacks properties

let obj = { h: 100, s: true };
let { h, s } = obj;

console.log(h); // 100
console.log(s); // true

// Without declaration

let a, b;
({ a, b } = { a: 'Hello ', b: 'Jack' });

console.log(a + b); // Hello Jack

// Or

let { a, b } = { a: 'Hello ', b: 'Jack' };
console.log(a + b);

// New variable names

var o = { h: 42, s: true };
var { h: foo, s: bar } = o;

// console.log(h); // Error
console.log(foo); // 42
// console.log(s); // Error
console.log(bar); // true

// Assign default values to variables

var obj = { id: 42, name: "Jack" };
let { id = 10, age = 20 } = obj;

console.log(id); // 42
console.log(age); // 20

// Combine rename and default values

var obj = { id: 42, name: "Jack" };
let { id: identifier = 10, age = 20 } = obj;

console.log(identifier); // 42
console.log(age); // 20
