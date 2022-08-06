/*
Write a function named findArea() that will take base and height of a triangle 
and will return the area of triangle.

*/
function findArea(base, height) {
    let area = 1 / 2 * base * height;
    return 'Area of a Triangle: ' + area;
}
let base = 4;
let height = 5;
console.log(findArea(base, height));