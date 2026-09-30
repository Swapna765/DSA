let arr = [10, 25, 7, 40, 15];

let largest = arr[0];
let secondLargest = -Infinity;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
    } else if (arr[i] > secondLargest) {
        secondLargest = arr[i];
    }
}

console.log(secondLargest);