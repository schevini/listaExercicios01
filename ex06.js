const prompt = require('prompt-sync')()

let a = (prompt('Digite o valor do lado A: '))
let b = (prompt('Digite o valor do lado B: '))
let c = (prompt('Digite o valor do lado C: '))

if (a < b + c && b < a + c && c < a + b) {
    console.log('Os lados formam um triângulo.')
    if (a === b && b === c) {
        console.log('Triângulo Equilátero')
    } else if ( a === b || a === c || b === c) {
        console.log('Triângulo Isósceles')
    } else {
        console.log('Triângulo Escaleno')
    }
} else {
    console.log('Os lados não formam um triângulo.')
}