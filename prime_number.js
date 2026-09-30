primeNum = (num) => {
    let isPrime = true

    if(num === 1 && num < 1)
        return "The number is not Prime number"
    else{
        for(let i = 2; i<=num/2; i++){
            if(num % 2 === 0){
                isPrime = false
            }
            if(isPrime)
                return "The number is a Prime number"
            else
                return "The number is not Prime number"
        }
    }
}

console.log(primeNum(78))





let num = 17;
let isPrime = true;

if (num <= 1) {
    isPrime = false;
}

for (let i = 2; i < num/2; i++) {
    if (num % i === 0) {
        isPrime = false;
    }
}

if (isPrime) {
    console.log("Prime number");
} else {
    console.log("Not a Prime number");
}

