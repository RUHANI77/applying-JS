/*
area of a circle
*/
function circleArea(r) {
    let area = 3.1415926535 * r * r;
    return area;
}
let radius = 7;
let result = circleArea(radius);
console.log(result.toFixed(2));