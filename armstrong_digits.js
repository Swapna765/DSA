let n = 153;
let num = n;
let count = 0;
const numOfDigits = String(n).length;

while (num > 0) {
    const lastDigit = num % 10;
    count += lastDigit ** numOfDigits;
    num = Math.floor(num / 10);
}

console.log(count);

if (count === n) {
    console.log("Its a armstrong number");
} else {
    console.log("Its not a armstrong number");
}
