const prompt = require('prompt-sync')()

let  num = Number(prompt('Digite um número para calcular o fatorial: '))
let resultado = 1

for (let i = 1; i <= num; i++) {
    resultado *= i
}

console.log(`O fatorial de ${num}, é ${resultado}`)