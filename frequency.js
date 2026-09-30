// Prestoring value into some datastructure like List/Directory and then fetching it

// Brute force solution

let n = [2, 3, 5, 6, 4, 4, 3, 8, 1, 2, 6, 5];
let m = [2, 3, 5, 6, 7, 8];

let result = {}; // Pre-store frequency if elements in list 'n'

for (let num of m) {
    let count = 0;
    for (let x of n) {
        if (x === num) {
            count = count + 1;
        }
    }
    result[num] = count;
}
console.log(result);

// TC = O(m*n)
// SC = O(1)

// Optimal solution

n = [2, 3, 5, 6, 4, 4, 3, 8, 1, 2, 6, 5];
m = [2, 3, 5, 6, 7, 8];

let hashMap = {};

for (let x of n) {
    hashMap[x] = (hashMap[x] || 0) + 1;
}

result = {};
for (let num of m) {
    result[num] = hashMap[num] || 0;
}
console.log(result);

// Character hashing

let s = "dsjnfjfiwjdijka";
let p = ["a", "t", "j", "f", "d"];

let hashList = new Array(26).fill(0);
for (let ch of s) {
    let index = ch.charCodeAt(0) - "a".charCodeAt(0);
    hashList[index] += 1;
}

for (let ch of p) {
    let index = ch.charCodeAt(0) - "a".charCodeAt(0);
    console.log(`${ch}: ${hashList[index]}`);
}

// TC = O(n+m)
// SC = O(1)




let str = "hello";

let frequency = {};

for (let i = 0; i < str.length; i++) {

    let char = str[i];

    if (frequency[char]) {
        frequency[char]++;
    } else {
        frequency[char] = 1;
    }
}

console.log(frequency);