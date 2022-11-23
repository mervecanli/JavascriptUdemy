function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyecolor = eyecolor;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

// Person.nationality = "English"; // you can not add a new property to an existing object constructor


// using the prototype property
Person.prototype.nationality = "English";

// The JavaScript prototype property also allows you to add new methods to objects constructors:
Person.prototype.name =  function() {
    return this.firstName + " " + this.lastName;
};