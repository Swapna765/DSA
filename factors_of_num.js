// Brute force solution

let num = 10;
let result = [];

for (let i = 1; i < num; i++) { // It should start with 1 because 10 % 0 is impossible
    if (num % i === 0) {
        result.push(i);
    }
}
result.push(num);
console.log(result);

// TC = O(N)
// SC = O(K)   K refers to the number of factors

// Better solution

num = 10;
result = [];

for (let i = 1; i <= Math.floor(num / 2) + 1; i++) { // +1 for the middle one
    if (num % i === 0) {
        result.push(i);
    }
}
result.push(num);
console.log(result);

// Optimal solution

num = 36;
result = [];

for (let i = 1; i <= Math.floor(Math.sqrt(num)); i++) { // +1 for the middle one
    if (num % i === 0) {
        result.push(i);
        if (Math.floor(num / i) !== i) {
            result.push(Math.floor(num / i));
        }
    }
}
result.sort((a, b) => a - b);
console.log(result);

// Tc = O(sqrt(N))
// SC = O(N log N)
