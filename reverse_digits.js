let n = 234557789;
let num = n;
let count = 0;

while (num > 0) {
    const lastDigit = num % 10;
    count = count * 10 + lastDigit;
    num = Math.floor(num / 10);
}

console.log(count);
