let testCases = 4;
let rtp=4;
let audit=2;
let nonRtp=0;

let output = [];
// let input = [
//     [testCases],
//     [6,6,5],
//     [8,7,2],
//     [9,3,8],
//     [9,2,4]
// ]

let div_input = document.getElementById("input_list");
let div_output = document.getElementById("output_list");

function getRandom() {
    return Math.floor((Math.random() * 9)+1);
}

// random input
let input=[];
input[0] = [testCases];
for(let i=1; i<=testCases; i++) {
    input[i] = [];
    for(let j=0; j<3; j++) {
        input[i][j] = getRandom();
    }
}

for(let i=0; i<input.length-1; i++) {
    output[i] = [(rtp*input[i+1][0]) + (audit*input[i+1][1]) + (nonRtp*input[i+1][2])];
}

div_input.innerHTML="";
for(let item of input) {
    let div = `<div>${item}</div>`;
    div_input.insertAdjacentHTML("beforeend", div);
}

div_output.innerHTML="";
for(item of output) {
    let div = `<div>${item}</div>`;
    div_output.insertAdjacentHTML("beforeend", div);
}


console.log(Math.random());