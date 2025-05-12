/*
let num = 10
let fibonacci = [1, 1]

for (i = 2; i < num; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}

console.log('Os 10 primeiros números da sequência de Fibonacci são: ')
console.log(fibonacci.join(', '))
*/

let n = 10
let a = 0, b = 1
let i = 0

console.log('Os 10 primeiros números da sequência de Fibonacci são: ')

while (i < n) {
    console.log(a)
    let soma = a + b
    a = b
    b = soma
    i++;
}