factorial = (num) => {
    let fact = 1

    for(let i = 1; i <= num; i++){
        fact = fact*i
    }
    console.log(fact)
}

factorial(5)




let n = 5;

let factorial_num = 1;

for (let i = 1; i <= n; i++) {
    factorial_num = factorial_num * i;
}

console.log(factorial_num);