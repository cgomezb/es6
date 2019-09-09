// Prior to ES6

function add(x, y) {
  var sum = x + y;
  console.log(sum);
}

// ES6 introduces

const add = (x, y) => {
  let sum = x + y;
  console.log(sum);
}

// This new syntax is quite handy

const greet = x => "Welcome " + x;

// If there are no parameters, an empty pair of parentheses should be used

const x = () => alert("Hi");

// For example

var arr = [2, 3, 7, 8];

arr.forEach(function(el) {
  console.log(el * 2);
});

// However, in ES6

arr.forEach(v => console.log(v * 2));
