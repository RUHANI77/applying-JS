/*
Write a function findLeapYear() that will take the array
[2023, 2024, 2025, 2028, 2030] as the input parameter and will check if
each year is a leap year.If a year is a leap year insert that year in a
new array, return the new array and print the result.
*/

function findLeapYear(ar) {
    let arr = [];

    for (let i = 0; i < ar.length; i++){
        if (((ar[i] % 4 == 0) && (ar[i] % 100 != 0 ))|| (ar[i] % 400 == 0)) {
            arr.push(ar[i]); 
        }
        else {
            continue;
        }
    }
    return arr;
}
let ar = [2023, 2024, 2025, 2028, 2030];

let result = findLeapYear(ar);
console.log(result);