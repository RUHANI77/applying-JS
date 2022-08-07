var fruits = ['Apple', 'Banana', 'Orange'];

//Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.

var bananaIndex = fruits.indexOf('Banana');
console.log(bananaIndex);
fruits[1] = 'Mango';
console.log(fruits);

//Remove ‘Orange’ and add ‘Watermelon’.

fruits.pop('Orange');
console.log(fruits);

fruits.push('Watermelon');
console.log(fruits);
