/*
Write a JavaScript function that accepts a number as a parameter and check 
the number is prime or not.
*/

function isPrime(n) {
    if (n <= 1)
        return false;
    for (let i = 2; i < n; i++){
        if (n % i == 0)
            return false;
        return true;
    }
}
let n = 7;
console.log(isPrime(n));