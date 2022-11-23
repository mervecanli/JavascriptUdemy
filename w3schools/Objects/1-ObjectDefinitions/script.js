const cars =  {type: "Fiat", model: "500", color: "white"};

const person = {firstName: "John", lastName:"Doe", age: 50, eyeColor: "blue"};

person.lastName;
person["lastName"];

// ---------------------

const person2 = {
    firstName: "John", 
    lastName:"Doe", 
    id: 5566,
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};
fullName = person2.fullName();

// ---------------------


const person3 = {};
person3.firstName = "John";
person3.lastName = "Doe";
person3.age = 50;
person3.eyeColor = "blue";
person3.fullName = fullNamePerson3(person3.firstName, person3.lastName);

function fullNamePerson3(firstName, lastName) {
    return firstName + " " + lastName;
}
// console.log(person3);



// ---------------------

const person4 = {
    firstName: "Johnnn", 
    lastName:"Doeee", 
    id: 5566,
};
person4.fullName=setFullName(person4);
function setFullName(value) {
    return `${value.firstName} ${value.lastName}`
};
// console.log(person4);

// ---------------------

let people = [
    {firstName: "Jhn", lastName:"Do", id: 5566},
    {firstName: "JhnJhn", lastName:"DoDo", id: 5577},
];
people.forEach(setPeopleFullName);

function setPeopleFullName(value) {
    value.fullName = `${value.firstName} ${value.lastName}`;
}
// console.log(people);

// ---------------------

const aboneler = [
    {ad:"Su", soyad:"Veli", tc:"12345678909", sehir:"bursa"},
    {ad:"Mahmut", soyad:"Al", tc:"12345678909", sehir:"bursa"},
    {ad:"Su", soyad:"Al", tc:"12345678909", sehir:"bursa"},
    {ad:"Gaye", soyad:"Güneş", tc:"12345678909", sehir:"bursa"},
];

aboneler.forEach(maskAboneler);

function maskAboneler(value) {
    if(value.ad.length != 2 && value.soyad.length != 2) {
        value.maskfullName = `${value.ad.charAt(0)}***${value.ad.charAt(value.ad.length-1)} ${value.soyad.charAt(0)}***${value.soyad.charAt(value.soyad.length-1)}`;
    } else if (value.ad.length == 2 && value.soyad.length != 2) {
        value.maskfullName = `${value.ad.charAt(0)}* ${value.soyad.charAt(0)}***${value.soyad.charAt(value.soyad.length-1)}`;
    } else if (value.soyad.length == 2 && value.ad.length != 2) {
        value.maskfullName = `${value.ad.charAt(0)}***${value.ad.charAt(value.ad.length-1)} ${value.soyad.charAt(0)}*`;
    } else if (value.ad.length == 2 && value.soyad.length == 2) {
        value.maskfullName = `${value.ad.charAt(0)}* ${value.soyad.charAt(0)}*`;
    }
    value.maskTc = `${value.tc.charAt(0)}*********${value.tc.charAt(value.tc.length-1)}`;  
};
console.log(aboneler);