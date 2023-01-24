"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 20;
    console.log(num);
}

showFirstMessage("hello");
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(8, 5));


function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

let usdCurr = 28;
let eurCurr = 32;

function convert(amount, curr) {
    console.log(curr * amount);
}

convert(500 , usdCurr);
convert(500 , eurCurr);