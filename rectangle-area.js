/*
Write a function named findArea() that will take height and width of a 
rectangle and will return the area of rectangle.
*/
function findArea(h, w) {
    let area = h * w;
    return 'Area of a Rectangle:' + area;
}
let height = 4;
let width = 7;
console.log(findArea(height, width));