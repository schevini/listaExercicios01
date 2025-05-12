const prompt = require('prompt-sync')()

let peso = Number(prompt('Digite seu peso: '))
let altura = Number(prompt('Digite sua altura:'))

let soma = peso / (altura * altura)

if (soma < 18.5) {
    console.log(`Seu IMC é ${soma} , você está muito magro!`)
} else if (soma >= 18.5 && soma <= 24.9) {
    console.log(`Seu IMC é ${soma} , seu peso está normal!`)
} else if( soma > 25 && soma <= 29.9) {
    console.log(`Seu IMC é ${soma} , você está sobrepeso`)
} else {
    console.log(`Seu IMC é ${soma} , você está obeso!`)
}