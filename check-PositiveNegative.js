/*
Write a function that will take a number and will check the number is positive 
or negative.
*/

function checkPosNeg(a) {
    if (a < 0) {
        return 'Negative Number';
    }
    else {
        return 'Positive Number';
    }

}
let number = -123;
console.log(checkPosNeg(number));