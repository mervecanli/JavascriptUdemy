// js func. bind()


const person = {
    firstName: "John",
    lastName: "Doe",
    fullName:  function() {
        // return this.firstName + " " + this.lastName;
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const member = {
    firstName: "Hege",
    lastName: "Nilsen"
}

// console.log(person.fullName()); // John Doe
// console.log(person.fullName.call(member)); //Hege Nilsen
// console.log(person.fullName.apply(member)); //Hege Nilsen
// console.log(person.fullName.bind(member));

setTimeout(person.fullName, 3000); //undefined undefined // Because a function is used as a callback, this is lost. You can solve this problem with bind().

let display = person.fullName.bind(person);
setTimeout(display, 3000); //John Doe

let displayMember = person.fullName.bind(member);
setTimeout(displayMember, 3000); // Hege Nilsen