/*
Write a program to find the total price of those product object.
{ name: “Laptop”, color: “black” , price: 12000 }
{ name: “Monitor”, color: “gray” , price: 5000 }
{ name: “Mobile”, color: “black” , price: 2500 }

*/


let productOne = {
    name: "Laptop",
    color: "black",
    price: 12000
};

let productTwo = {
    name: "Monitor",
    color: "gray",
    price: 5000
};

let productThree = {
    name: "Mobile",
    color: "black",
    price: 2500
}

let result = (productOne.price + productTwo.price + productThree.price);
console.log(result);
