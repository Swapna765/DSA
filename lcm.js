let a = 4;
let b = 6;

let gcd = 1;

for (let i = 1; i <= a && i <= b; i++) {

    if (a % i === 0 && b % i === 0) {
        gcd = i;
    }
}

let lcm = (a * b) / gcd;

console.log("LCM =", lcm);