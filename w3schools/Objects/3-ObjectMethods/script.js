const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
// console.log(person);
// console.log(person.fullName());


const person2 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
};
person2.fullName = function() {
    return this.firstName + " " + this.lastName;
};
// console.log(person2);
// console.log(person2.fullName());


const person3 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
};
person3.fullName = person3.firstName + " " + person3.lastName;
// console.log(person3);


let people4 = [
    {firstName: "Jhn", lastName:"Do", id: 5566},
    {firstName: "JhnJhn", lastName:"DoDo", id: 5577},
];
people4.forEach(setPeopleFullName);
function setPeopleFullName(value) {
    value.fullName = (`${value.firstName} ${value.lastName}`).toUpperCase();
}
console.log(people4);