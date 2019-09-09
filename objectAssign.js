// Combine multiple sources into one target to create a single new object

let person = {
  name: 'Jack',
  age: 18,
  sex: 'male'
};
let student = {
  name: 'Bob',
  age: 20,
  xp: '2'
};
let newStudent = Object.assign({}, person, student);

console.log(newStudent); // {name: "Bob", age: 20, sex: "male", xp: "2"}

// Duplicate object without creating a reference (mutating) to the base object

// Mutate

let person = {
  name: 'Jack',
  age: 18
};

let newPerson = person; //  newPerson references person
newPerson.name = 'Bob';

console.log(person.name); // Bob
console.log(newPerson.name); // Bob

// To avoid mutations

let person = {
  name: 'Jack',
  age: 18
};

let newPerson = Object.assign({}, person);
newPerson.name = 'Bob';

console.log(person.name); // Jack
console.log(newPerson.name); // Bob

// Assign a value to an object property in the Object.assign() statement

let person = {
  name: 'Jack',
  age: 18
};

let newPerson = Object.assign({}, person, { name: 'Bob' });

console.log(newPerson); // {name: "Bob", age: 18}
