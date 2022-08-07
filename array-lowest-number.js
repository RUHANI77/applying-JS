//Find the lowest Number of an Array

function ArrayLowestNumber(a) {
    let lowest = a[0];
    for (let i = 0; i < a.length; i++){
        let element = a[i];
        if (element < lowest) {
            lowest = element;
        }
    }
    return lowest;
}

let a = [2, 4, 5, 6, 7, 8, 9, 45, 67, 1, 99];
const lowestNumber = ArrayLowestNumber(a);
console.log(lowestNumber);