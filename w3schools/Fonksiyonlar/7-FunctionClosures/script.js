// js closures

// global variables

// a func. can access all variables defined inside the funct., like this:
function myFunc() {
    let a = 4;
    return a * a;
}

// but a func. can also access variables defined outside the func., like this:
let b = 4;
function myFunc2() {
    return b*b;
}

// note that: variables created without a declaration keyword (var, let or const) are always global, even if they are created inside a function.
function myFunc3() {
    c=4;
}



// A counter dilemma

// let counter=0;
// function add() {
//     counter += 1;
// }
// add();
// add();
// add();
// console.log(counter);  

// There is a problem with the solution above: Any code on the page can change the counter, without calling add().
// The counter should be local to the add() function, to prevent other code from changing it:

// let counter=0;
// function add() {
//     let counter = 0;
//     counter += 1;
// }
// add();
// add();
// add();
// console.log(counter); // The counter should now be 3. But it is 0

// It did not work because we display the global counter instead of the local counter.
// We can remove the global counter and access the local counter by letting the function return it:

// function add() {
//     let counter = 0;
//     counter += 1;
//     return counter;
// }
// add();
// add();
// add(); // The counter should now be 3. But it is 1.

// It did not work because we reset the local counter every time we call the function.
// A js inner function can solve this.

// function add() {
//     let counter=0;
//     function plus() {
//         counter += 1;
//     }
//     plus();
//     return counter;
// }

// This could have solved the counter dilemma, if we could reach the plus() function from the outside.
// We also need to find a way to execute counter = 0 only once.
// We need a closure.

const add = (function() {
    let counter = 0;
    return function() {
        counter += 1;
        return counter;
    }
})();

add();
add();
add(); 
// the counter is now 3