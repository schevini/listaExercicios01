const prompt = require('prompt-sync')()

let soma = 0

for(let i = 1; i <= 5; i++) {
    let num = Number(prompt('Digite um valor: '))
    soma += num
}
console.log(`A soma total é: ${soma}`)