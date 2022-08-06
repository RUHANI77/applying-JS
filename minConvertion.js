/*
Write a function that will take hour as the input parameter and will
convert it into minutes and will return the result in minutes.
*/

function minConvertion(hour) {
    let result = hour * 60;
    return result;
}

let hour = 12;
console.log(minConvertion(hour)+ ' Minutes');