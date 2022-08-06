/*
Write a function that will take a integer as a input and will return the factorial 
number for this input. ( using for and while loop )
*/

function factorial(a) {
    let fact = 1;
    let sum = 0;
    for (let i = 1; i <= a; i++){
        fact = fact * i;
    }
    return fact;
}
let a = 5;
console.log(factorial(a));
/*
Calculating factorial using while loop
*/
function fact(b) {
    let factorial = 1;
    while (b > 0) {
        factorial *= b;
        b--;
    }
    return factorial;
}
let b = 3;
console.log(fact(b));
