const prompt = require('prompt-sync')()

let idade = Number(prompt('Qual é sua idade? '))

if (idade >= 60) {
    console.log(`Você tem ${idade} anos, você é um idoso.`)
} else if (idade >= 18 && idade < 60) {
    console.log(`Você tem ${idade} anos, você é um adulto.`)
} else if (idade >= 12 && idade < 18) {
    console.log(`Você tem ${idade} anos, você é um adolescente.`)
} else {
    console.log(`Você tem ${idade} anos, você é uma criança.`)
}