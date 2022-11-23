const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
        return this.language;
    }
};

// console.log(person.lang);
// console.log(person.lang()); // Uncaught TypeError: person.lang is not a function

const person2 = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
        this.language=lang;
    }
};
person2.lang="en";
// console.log(person2);


const person3 = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
// console.log(person3);
// console.log(person3.fullName());


const person4 = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
};
// console.log(person4);
// console.log(person4.fullName);

// person3 => access fullName as a function: person.fullName().
// person4 => access fullName as a property: person.fullName.
// The last one provides a simpler syntax.


const person5 = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
        return this.language.toUpperCase();
    }
};
// console.log(person5.lang);


const person6 = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
        this.language=lang.toUpperCase();
    }
};
person6.lang = "tr";
// console.log(person6.language);


// Why Using Getters and Setters?
// It gives simpler syntax
// It allows equal syntax for properties and methods
// It can secure better data quality
// It is useful for doing things behind-the-scenes



// Object.defineProperty()

// define object
const obj={counter: 2};

// define setters and getters
Object.defineProperty(obj, "reset", {
    get: function() {this.counter=0;}
});

Object.defineProperty(obj, "increment", {
    get: function() {this.counter++;}
});

Object.defineProperty(obj, "decrement", {
    get: function() {this.counter--;}
});

Object.defineProperty(obj, "add", {
    set: function(value) {this.counter += value;}
});

Object.defineProperty(obj, "subtract", {
    set: function(value) {this.counter -= value;}
});

// play with the counter

obj.reset;
obj.add=5;
obj.subtract=2;
obj.increment;
obj.decrement;

console.log(obj);