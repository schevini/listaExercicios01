const prompt = require('prompt-sync')()

let valor1 = Number(prompt('Digite um valor:'))
let valor2 = Number(prompt('Digite outro  valor:'))

if (valor1 === valor2) {
    console.log('Digite valores diferentes!')
} else {
    if (valor1 < valor2) {
        console.log(`Ordem crescente: ${valor1}, ${valor2}`)
    } else {
        console.log(`Ordem crescente ${valor2}, ${valor1}`)
    }
}