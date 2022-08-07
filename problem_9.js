function make_avg(a, b) {
    let result = 0;
    
    for (let i = 0; i < b; i++){
         result = result + a[i];

    }
    return (result / b);
    
}

var ar = [2, 4, 6, 7, 8, 9, 10];
const arrayLength = ar.length;
const result = make_avg(ar, arrayLength);
console.log(result.toFixed(3));
