let n = 234557789;
let num = n;
let count = 0;

while (num > 0) {
    const lastDigit = num % 10;
    count += 1;
    num = Math.floor(num / 10);
}

console.log(count);

function countDigit(number) {
    return Math.floor(Math.log10(number) + 1);
}

console.log(countDigit(2234));
