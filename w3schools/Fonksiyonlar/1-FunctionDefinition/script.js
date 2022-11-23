function myFunction(p1, p2) {
    return p1*p2;
}

let x = myFunctionCalc(4,3);

function myFunctionCalc(a,b) {
    return a*b;
}



function toCelcius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}

let y = toCelcius(77);
let text  = "The temperature is " + x + " celcius";
let text2 = "The temperature is" + toCelcius(77) + " celcius";

const z = function (a,b) {
    return a*b;
}

let zz = z(4,3);


// the Function() constructor
const myFunctionConst = new Function("a","b", "return a*b");
let xz = myFunctionConst(4,3); 
//You actually don't have to use the function constructor. The example above is the same as writing:
const myFunctionConst2 = function(a,b) { return a*b; }
let xz2 = myFunctionConst2(4,3);


// self-invoking functions
(function() {
    let x = "Hello!!"; // i will invoke myself
})();


// functions can be used as values
function myFunc(a,b) {
    return a*b;
}
let ab= myFunc(4,3) * 2;


// functions are objects
function myFunctArgCount(a,b,c)  {
    return arguments.length; // it will return 3
}

console.log(myFunctArgCount(1,2,3));

// the toString() method returns the function as a string:
let txt = myFunctArgCount.toString();
console.log(txt);


// Arrow Frunctions
// ES5
var xy = function(x,y) {
    return x*y;
}
// ES6
const _xy = (x,y) => x*y;
const __xy = (x,y) => {return x*y}