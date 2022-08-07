//Write a function that will take 3 parameters and will return the max number.

//Write a function that will take 3 parameters and will return the min number.

//Find the max number in an array

function maxInArray(numbers) {
    for (let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        console.log(element);

    }
}

const heights = [167, 190, 120, 165, 137];

const tallest = maxInArray(heights);
console.log('Tallest person is: ', heights);