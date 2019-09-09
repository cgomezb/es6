// ES6 introduces shorthand notations and computed property names

let tree = {
  height: 10,
  color: 'green',
  grow() {
    this.height += 2;
  }
};
tree.grow();
console.log(tree.height); // 12

// You can also use a property value shorthand when initializing properties with a variable

let height = 5;
let health = 100;

let athlete = {
  height,
  health
};

// When creating an object by using duplicate property names

var a = {x: 1, x: 2, x: 3, x: 4}; // {x: 4}
