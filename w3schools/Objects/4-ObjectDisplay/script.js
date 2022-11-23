const person = {
    name: "John",
    age: 30,
    city: "New York",
    today: new Date(),
    age: function() {return 30;} //JSON.stringify will not stringify functions
};

// JSON.stringify will not stringify functions
// This can be "fixed" if you convert the functions into strings before stringifying.
person.age = person.age.toString();


console.log(person);
console.log(typeof person);
console.log("-----");
console.log(Object.values(person));
console.log(typeof Object.values(person));
console.log("-----");
console.log(JSON.stringify(person));
console.log(typeof JSON.stringify(person));
console.log("-----");



// Stringify Arrays
const arr = ["John", "Peter", "Sally", "Jane"];
let myString = JSON.stringify(arr);
console.log(myString);
console.log(typeof myString);
console.log("-----");