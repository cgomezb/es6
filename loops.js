// In JavaScript we commonly use

let arr = [1, 2, 3];
for (let k = 0; k < arr.length; k++) {
  console.log(arr[k]);
}

// The for...in loop

let obj = { a: 1, b: 2, c: 3 };
for (let v in obj) {
  console.log(v);
}

// ES6 introduces the new for...of loop

let list = ["x", "y", "z"];
for (let val of list) {
  console.log(val);
}

// The for...of loop

for (let ch of "Hello") {
  console.log(ch);
}
