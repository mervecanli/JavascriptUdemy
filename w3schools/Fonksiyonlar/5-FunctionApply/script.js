// js func. apply()

const person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

const person1 = {
    firstName: "Mary",
    lastName: "Doe"
}

let usingCallMethod = person.fullName.call(person1);
let usingApplyMethod = person.fullName.apply(person1);

console.log(usingCallMethod); // This will return "Mary Doe"
console.log(usingApplyMethod); // This will return "Mary Doe"


// the diffrence between call() and apply()
// the diffrence is:
// the call() method takes arguments SEPERATELY
// the apply() method takes arguments as an ARRAY 

const person2 = {
    fullName: function(city, country) {
        return `${this.firstName} ${this.lastName} => ${city}/${country}`;
    }
}
const person3 = {
    firstName:"John",
    lastName: "Doe"
}
let callMethod = person2.fullName.call(person3, "Oslo", "Norway");
let applyMethod = person2.fullName.apply(person3, ["Oslo", "Norway"]);

console.log(callMethod);
console.log(applyMethod);

console.log(Math.max.apply(null, [1,2,3])); // will also return 3
console.log(Math.max.call(null, "1","2","3")); // will also return 3

// the first parameter null does not matter. These examples will give the same result.
console.log(Math.max.apply(Math, [1,2,3]));
console.log(Math.max.apply(" ", [1,2,3]));
console.log(Math.max.apply(0, [1,2,3]));