//Finding the largest number

const num1 = 13;
const num2 = 79;
const num3 = 45;

if (num1 > num2 && num1 > num3) {
    console.log(num1 +' '+ 'is the largest number');
}
else if(num2>num1 && num2>num3){
    console.log(num2 + ' ' + 'is the largest number');
}
else {
    console.log(num3 + ' ' + 'is the largest number');
}

//check whether a triangle is Isosceles or not.

const a = 9;
const b = 8;
const c = 9;

if (a == b) {
    console.log('Triangle is Isosceles');
}
else if (b == c) {
    console.log('Triangle is Isosceles');
}
else if (c == a) {
    console.log('Triangle is Isosceles');
}
else {
    console.log('Triangle is not Isosceles');
}