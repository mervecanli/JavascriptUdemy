function myFunc(x,y) {
    if(y===undefined) {
        y=2;
    }
}

function myFunc2(x, y=2) {
    // funct code here
}

let min = findMin(1, 125, 6321, -96, -78, 0 , 3, 851);
let max = findMax(1, 125, 6321, -96, -78, 0 , 3, 851);
let sum = sumAll(1, 125, 6321, -96, -78, 0 , 3, 851);


console.log("Min value is ", min);
console.log("Max value is ", max);
console.log("Sum of the all value is ", sum);

function findMin() {
    let min = Infinity;
    for(let i=0; i<arguments.length; i++) {
        if(arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min;
}

function findMax() {
    let max = -Infinity;
    for(let i=0; i<arguments.length; i++) {
        if(arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

function sumAll() {
    let sum=0;
    for(let i=0; i<arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}