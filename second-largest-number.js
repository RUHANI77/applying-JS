//কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো।

const arr = [3, 66, 7, 34, 56, 12, 33, 45, 99, 88, 100,145];

function secondLargestNumber(arr) {
    let largest = arr[0];
    let secondLargest = arr[0];
   for (let i = 0; i < arr.length; i++){
        const element = arr[i];
        if (largest < element) {
            secondLargest = largest;
            largest = arr[i];
       }
        else if (arr[i] > secondLargest) {
            secondLargest = arr[i];
       }
    }
    
    console.log('First Largest Number: ',largest);
    console.log('Second Largest Number: ',secondLargest);
}
console.log(secondLargestNumber(arr));