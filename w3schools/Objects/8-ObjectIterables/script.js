// iterating over string 
for(const x of "W3Schools") {
    console.log(x);
}

// itrating over an array
for(const x of [1,2,3,4,5]){
    console.log(x);
}

// home made iterable
function myNumbers() {
    let n=0;
    return{
        next: function() {
            n += 10;
            return {value:n, done:false};
        }
    };
}
//create iterable
const n= myNumbers();
n.next(); // returns 10
n.next(); // returns 20
n.next(); // returns 30



// create an object
myNumbers2= {};

// make it iterable
myNumbers2[Symbol.iterator] = function() {
    let n=0;
    done=false;
    return {
        next() {
            n += 10;
            if(n==100){done=true}
            return {value:n, done:done};
        }
    };
}
// now u can use for..of
for(const num of myNumbers2) {
    console.log(num);
}

let iterator = myNumbers2[Symbol.iterator]();
while(true) {
    const result = iterator.next();
    if(result.done) break;
    //any code here...
}