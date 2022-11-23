// invoking a function as a function

function myFunct(a,b) {
    return a*b; 
}
myFunct(10,2);
window.myFunct(10,2); // will alson return 20


// What is THIS?
// In js, the this keyword refers to an object

let x = myFunct2();
console.log(x); // x will be the window object

function myFunct2() {
    return this;
}


// invoking a funtion as a method

const myObj = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function () {
        return this.firstName + " " + this.lastName;
        // return this;
    }
};

myObj.fullName(); // will return "John Doe"



// invoking a function with a function constructor

// this is a function constructor
function myFunct3(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;
}
// this creates a new object
const myObj3 = new myFunct3("John", "Doe");

// this will return John
myObj3.firstName;