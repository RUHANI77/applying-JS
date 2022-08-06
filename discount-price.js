/*
Write a function that takes input the total price of the products you bought and 
returns the net price calculated according to the discount table below.

>=1000------------->10%
>=3000------------->15%
>=5000------------->20%
*/
function discountPrice(a) {
    let price = 0;
    let discount = 0;
    if (a > 5000) {
        discount = (20 / 100) * a;
        price = a - discount;
    }
    else if (a >= 3000) {
        discount = (15 / 100) * a;
        price = a - discount;
    }
    else if (a >= 1000) {
        discount = (10 / 100) * a;
        price = a - discount;
    }
    
    else {
        price = a;
    }
    return price;
}
let totalPrice = 2000;
console.log(discountPrice(totalPrice));