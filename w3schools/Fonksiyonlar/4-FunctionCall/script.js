// js funct. call()

const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function () {
        // In an object method, this refers to the object. 
        return this.firstName + " " + this.lastName;
    }
}

person.fullName(); // this will return "John Doe"


function funct2() {
    return this;
}
console.log(funct2()); // window


// the js call() method
// it can be used to invoke (call) a method with an owner object as an argument (parameter).
const _person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

const person1 = {
    firstName: "John",
    lastName: "Doe"
}
const person2= {
    firstName: "Mary",
    lastName: "Doe"
}

_person.fullName.call(person1); // this will return "John Doe"
_person.fullName.call(person2); // this will return "Mary Doe"


// the call() method with arguments

const _person2 = {
    fullName: function(city, country) {
        return `${this.firstName} ${this.lastName} => ${city}/${country}`;
    }
}
const _person1 = {
    firstName:"John",
    lastName: "Doe"
}
console.log(_person2.fullName.call(_person1, "Oslo", "Norway"));