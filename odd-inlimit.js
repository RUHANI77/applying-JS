/*
Write a function that will taka an array and calculate the sum of odd numbers 
greater than 10 and less than 50.

*/
function oddSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 != 0) {
            sum += arr[i];
        }
        else {
            continue;
        }

    }
    return sum;
}
let arr = [1, 2, 4, 5, 7, 8, 9, 15, 22, 76, 99];
console.log(oddSum(arr));