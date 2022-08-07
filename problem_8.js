/*function foo() {
    console.log("foo");
   
}
bar();
foo();

function bar() {
    console.log("bar");
}*/

function make_avg(a, b, c) {
    result = (a + b + c) / 3;
    return result;
    
}
let a = 5;
let b = 10;
let c = 7;

let avg = make_avg(a, b, c);
console.log(avg.toFixed(2));


