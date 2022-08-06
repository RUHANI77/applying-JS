/*
Write a function that will take an array and will return odd sum and even sum.

[ 3, 5, 8, 4, 25, 12] -----------> Odd sum = 33, Even sum= 24

*/
function oddevenSum(arr) {
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 0) {
            evenSum += arr[i]; 
        }
        else {
            oddSum += arr[i];
        }

    }
    return {
        "Odd Sum =": oddSum,
        "Even Sum =": evenSum
    };
}
let arr = [3, 5, 8, 4, 25, 12];
console.log(oddevenSum(arr));