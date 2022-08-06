/*
Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
as the input parameter and will return the sum of the odd numbers.
*/

function findOddSum(ar) {
    let oddSum = 0;
    for (let i = 0; i < ar.length; i++){
        if (ar[i] % 2 != 0) {
            oddSum = oddSum + ar[i];
            
        }
        else {
            continue;
        }
        
    }
    return oddSum;
}

let ar = [5, 7, 8, 10, 45, 30];
let result = findOddSum(ar);
console.log(result);