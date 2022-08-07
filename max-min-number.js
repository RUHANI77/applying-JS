//Write a function that will take 3 parameters and will return the max number.

function maxNumber(a, b, c) {
    let maxNum = Math.max(a, b, c);
    return maxNum;
}

let num1 = 2;
let num2 = 6;
let num3 = 11;

const result = maxNumber(num1, num2, num3);
console.log(result);

//Write a function that will take 3 parameters and will return the min number.

function minNumber(a, b, c) {
    let minNum = Math.min(a, b, c);
    return minNum;
}
const minNum = minNumber(num1, num2, num3);
console.log(minNum); 



