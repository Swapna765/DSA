fibonacci = (num) => {
    let a = 0
    let b = 1

    for(let i = 1; i <= num; i++){
        console.log(a)
        let next = a + b
        a = b
        b = next
    }
}
fibonacci(10)


console.log("In normal method")

let n = 5;

let a1 = 0;
let b1 = 1;

for (let i = 1; i <= n; i++) {
    console.log(a1);

    let next = a1 + b1;
    a1 = b1;
    b1 = next;
}