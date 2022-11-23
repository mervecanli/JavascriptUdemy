// JavaScript Object Constructors

function Person(first, last, age, eye) {
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.eyeColor=eye;
}

const myFather = new Person("John", "Doe", 50, "blue");

myFather.nationality = "English";

myFather.fullName = function() {
    return this.firstName + " " + this.lastName;
}

Person.nationality = "TR"; // // You can NOT add a new property to a constructor function

// To add a new property to a constructor, you must add it to the constructor function:
// function Person(first, last, age, eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
//     this.nationality = "Eng";
// }



// console.log("My father is " + myFather.age + ".");
// console.log(myFather);
// console.log(myFather.fullName());



// Adding a Method to a Constructor
// Your constructor function can also define methods:

function Person2(first, last, age, eyeColor) {
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.eyeColor=eyeColor;
    this.name=function() {
        return this.firstName + " " + this.lastName;
    }
}
const mySister = new Person2("Emily", "Doe", 25, "green");
// console.log(mySister.name());


function Person3(firstName, lastName, age, eyeColor) {
    this.firstName = firstName; 
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeLastName = function(value) {
        this.lastName=value;
    }
};

const myMother = new Person3("Sally", "Rally", 48, "green");
myMother.changeLastName("Doe");
// console.log(myMother);


// Built-in JavaScript Constructors
new String()    // A new String object
new Number()    // A new Number object
new Boolean()   // A new Boolean object
new Object()    // A new Object object
new Array()     // A new Array object
new RegExp()    // A new RegExp object
new Function()  // A new Function object
new Date()      // A new Date object

//The Math() object is not in the list. Math is a global object. The new keyword cannot be used on Math.