function odd_even(a) {
    if (a % 2 == 0) {
        console.log("It is a even Number");
    }
    else {
        console.log("It is a Odd Number");
    }
    
}

function OddEven(a) {
    let flag = 0;
    if (a % 2 == 1) {
        flag = 1;
    }
    else {
        flag = 0;
    }
    return flag;
}

let a = 18;
//console.log(odd_even(a));

if (OddEven(a) == 1) {
    console.log("Odd Number");
}
else {
    console.log("Even Number");
}