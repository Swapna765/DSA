let n = 2323232;
let num = n;
let count = 0;

while (num > 0) {
    const lastDigit = num % 10;
    count = count * 10 + lastDigit;
    num = Math.floor(num / 10);
}

console.log(count);

if (count === n) {
    console.log("Its a palindrome number");
} else {
    console.log("Its not a palindrome number");
}
