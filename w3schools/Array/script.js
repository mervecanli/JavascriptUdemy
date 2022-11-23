// const cars = ["Saab", "Volvo", "BMW"]; 

// const arabalar = [];
// arabalar[0] = "Saab";
// arabalar[1] = "Volvo";
// arabalar[2] = "BMW";

// const macchine = new Array("Saab", "Volvo", "BMW");

// let car = cars[0];
// cars[0] = "Opel";

// const person = ["John", "Doe", 46];
// const insanlar = {firstName:"John", lastName:"Doe", age:46};
// console.log(person[0]); //John
// console.log(insanlar.firstName); // John
// // Arrays are a special type of objects. The type operator in js return "object" for arrays.
// // But, js arrays are best described as arrays.
// // Arrays are numbers to access its "elements". 
// // Objects use names to access its "members".

// console.log(cars.length);
// console.log(cars.sort());

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let length = fruits.length;
// let fruit = fruits[0];
// let meyve = fruits[fruits.length-1];

// let text="<ul>";
// for(let i=0; i<fruits.length; i++) {
//     text += "<li>" + fruits[1] + "</li>"
// }
// text += "</ul>";


// let txt = "<ul>";
// fruits.forEach(myFunction);
// txt += "</ul>";
// function myFunction(value) {
//     txt += "<li>" + value + "</li>"
// }



// fruits.push("Lemon");
// fruits[fruits.length]="Lemon";
// // fruits[10]="Lemon"; //Creates undefined "holes" in fruits


// // The Difference Between Arrays and Objects => In js, ARRAYS use NUMBERED INDEXES. In js, OBJECTS use NAMES INDEXES.

// // const points = new Array();
// const points = []; // this is best way to create empty array than above example.

// let type = typeof fruits; // The typeof operator retırn object because a js array is an object.
// console.log(Array.isArray(fruits)); //solition 1
// console.log(fruits instanceof Array); //solition 2



// //JS ARRAY METHODS
// let newFruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(newFruits.toString()); //Banana,Orange,Apple,Mango
// console.log(newFruits.join(" * ")); //Banana * Orange * Apple * Mango
// let newFruit = fruits.pop(); // newFruit=Mango, newFruits=["Banana", "Orange", "Apple"];
// newFruits.push("Kiwi");
// newFruits.shift(); //Orange,Apple,Mango 
// newFruits.unshift("Lemon"); // Lemon,Banana,Orange,Apple,Mango
// delete newFruits[0];

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myChildren = myGirls.concat(myBoys);

// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];
// const childrens = arr1.concat(arr2, arr3);

// const ar1 = ["Emil", "Tobias", "Linus"];
// const cocuklar = ar1.concat("Peter");

// const yeniMeyveler = ["Banana", "Orange", "Apple", "Mango"];
// yeniMeyveler.splice(2, 0, "Lemon", "Kiwi");


// // JS Array Sort
// fruits.sort(); // sorts an array alphabetically
// fruits.reverse(); // sort an array in descending order

// const points = [40, 100, 1, 5, 25, 10];
// console.log(points.sort());

// let sortAsc = points.sort(
//     function(a,b) {
//         return a-b;
//     }
// );
// console.log(sortAsc);
// console.log(sortAsc[0]);

// let sortDesc = points.sort(
//     function(a,b) {
//         return b-a;
//     }
// );
// console.log(sortDesc);
// console.log(sortAsc[sortAsc.length-1]);


// let sortRandom = points.sort(
//     function(a,b) {
//         return 0.5 - Math.random()
//     }
// );

// console.log(sortRandom);


// function myArrayMax(arr) {
//     let len = arr.length;
//     let max = -Infinity;
//     while(len--) {
//         if(arr[len] > max) {
//             max = arr[len];
//         }
//     }
//     return max;
// }


// function myArrayMin(arr) {
//     let len = arr.length;
//     let min = Infinity;
//     while(len--) {
//         if(arr[len] < min) {
//             min = arr[len];
//         }
//     }
//     return min;
// }


// let cars = [
//     {type:"Volvo", year:2016},
//     {type:"Saab", year:2001},
//     {type:"BMW", year:2010}
// ];
// cars.sort(
//     function(a,b) {
//         return a.year-b.year;
//     }
// );

// cars.sort(
//     function(a,b) {
//         let x=a.type.toLowerCase();
//         let y=b.type.toLocaleLowerCase();
//         if(x<y){return -1;}
//         if(x>y){return 1;}
//         return 0;
//     }
// );



// JS Array Iteration

// const numbers = [45, 4, 9, 16, 25];
// let txt="";

// numbers.forEach(myFunction);
// function myFunction(value) {
//     txt += value+"<br>";
// }

// const numbers2=numbers.map(myFunctionMap);
// function myFunctionMap(value) {
//     txt += value * 2;
// }

// const over18 = numbers.filter(myfunctionFilter);
// function myfunctionFilter(value) {
//     return value>18;
// }

// let sum = numbers.reduce(myFunctionReduce);
// let sumWithInitialValue = numbers.reduce(myFunctionReduce, 100);
// let sumRightToLeft = numbers.reduceRight(myFunctionReduce);
// function myFunctionReduce(total, value){
//     return total+value;
// }

// let allOver18 = numbers.every(myFunctionEvery); //every() method check if all array values pass a test.
// function myFunctionEvery(value) {
//     return value>18;
// }

// let someOver18 = numbers.some(myFunctionSome);
// function myFunctionSome(value) {
//     return value>18;
// }

// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.indexOf("Apple")+1; // 1  // Array.indexOf() returns -1 if the item is not found.
// let position2 = fruits.lastIndexOf("Apple")+1; // 3

// const find18 = numbers.find(myFunctionFind);
// const findIndex18 = numbers.findIndex(myFunctionFind); // 3
// function myFunctionFind(value) {
//     return value>18;
// }

//JS Array.from()
// Array.from("ABCDEFG"); // A,B,C,D,E,F,G

//JS Array Keys()
// const meyveler = ["Banana", "Orange", "Apple", "Mango"];
// const keys = meyveler.keys();
// let text = "";
// for(let x of keys) {
//     text += x + "<br>"
// }


//JS Array includes()
// meyveler.includes("Mango"); // is true



//JS Array Const

// const cars = ["Saab", "Volvo", "BMW"]; //Cannot be Reassigned. An array declared with const cannot be reassigned.
// cars = ["Toyota", "Volvo", "Audi"];  //ERROR
// cars[0] = "Toyota"; // You can change an element
// cars.push("Audi"); // You can add an element

// const cars2; // ERROR 'const' declarations must be initialized.
// cars = ["Saab", "Volvo", "BMW"]; //ERROR

// arabalar = ["Saab", "Volvo", "BMW"];
// var arabalar;


// const cars=["Saab", "Volvo", "BMW"];
//here cars[0] is "Saab"
// {
    // const cars = ["Toyota", "Volvo", "BMW"];
    // here cars[0] is "Toyota"
// }
//here cars[0] is "Saab"


// var cars = ["Saab", "Volvo", "BMW"];
//here cars[0] is "Saab"
// {
    // var cars = ["Toyota", "Volvo", "BMW"];
    // Here cars[0] is "Toyota"
// }
// Here cars[0] is "Toyota"



// Redeclaring Arrays
// var cars = ["Volvo", "BMW"];   // Allowed
// var cars = ["Toyota", "BMW"];  // Allowed
// cars = ["Volvo", "Saab"];      // Allowed

// const cars = ["Volvo", "BMW"]; // Allowed
// const cars = ["Volvo", "BMW"]; // Not allowed
// {
//     var cars = ["Volvo", "BMW"]; // Allowed
//     const cars = ["Volvo", "BMW"]; // Not Allowed
// }


// const cars = ["Volvo", "BMW"];   // Allowed
// const cars = ["Volvo", "BMW"];   // Not allowed
// var cars = ["Volvo", "BMW"];     // Not allowed
// cars = ["Volvo", "BMW"];         // Not allowed

// {
//   const cars = ["Volvo", "BMW"]; // Allowed
//   const cars = ["Volvo", "BMW"]; // Not allowed
//   var cars = ["Volvo", "BMW"];   // Not allowed
//   cars = ["Volvo", "BMW"];       // Not allowed
// }  //Redeclaring or reassigning an existing const array, in the same scope, or in the same block, is not allowed

// const cars = ["Volvo", "BMW"];   // Allowed
// {
//   const cars = ["Volvo", "BMW"]; // Allowed
// }
// {
//   const cars = ["Volvo", "BMW"]; // Allowed
// } //Redeclaring an array with const, in another scope, or in another block, is allowed