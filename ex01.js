const prompt = require('prompt-sync')()

let numeroParImpar = parseInt(prompt('Insira um valor, para saber se ele é Par ou Ímpar: '))

if(numeroParImpar % 2 == 0){
    console.log(`O número ${numeroParImpar} é PAR!`)
} else {
    console.log(`O número ${numeroParImpar} é ÍMPAR!`)
}