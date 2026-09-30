let arr = [1, 2, 4, 5]

let n = 5

let expectsum = n * (n + 1)/2
let actualsum = 0

for(let i = 0; i < arr.length; i++){
    actualsum = actualsum+arr[i]
}

let missing = expectsum - actualsum
console.log(missing)







// Using reduce method

const arr2 = [1, 2, 4, 5];
const n2 = 5;

const missingNumber = (n2 * (n2 + 1)) / 2 - arr2.reduce((sum, num) => sum + num, 0);

console.log(missingNumber);