const person = {
    fname: "John",
    lname: "Doe",
    age:25
};
let txt="";
for(let x in person) {
    txt += person[x] + " ";
}
// console.log(txt);

person.nationality="English";
delete person.age;
delete person["nationality"];
// console.log(person);

// Nested Object

myObj = {
    name:"John",
    age:30,
    cars:{
        car1:"Ford",
        car2:"BMW",
        car3:"Fiat"
    }
};

// console.log(myObj.cars.car2);
// console.log(myObj.cars["car2"]);
// console.log(myObj["cars"]["car2"]);

let p1="cars";
let p2="car2";
// console.log(myObj[p1][p2]);


const personInfo = {
    name: "John",
    age:30,
    cars:[
        {
            name:"Ford",
            models:["Fiesta","Focus","Mustang"]    
        },
        {
            name:"BMW",
            models:["320","X3","X5"]    
        },
        {
            name:"Fiat",
            models:["500","Panda"]    
        },
    ]
};

let x="";
for(let i in personInfo.cars){
    x += personInfo.cars[i].name + " => "; 
    for(let j in personInfo.cars[i].models){
        x += personInfo.cars[i].models[j] + ", " ;
    }
    x +=  " | " ;
}
console.log(x);