const prompt = require('prompt-sync')()

let nota = Number(prompt('Insira uma nota de 0 a 10: '))

if (nota >= 7) {
    console.log(`Parabéns sua nota é ${nota} ! APROVADO!`)
} else if ( nota >= 5 && nota < 7) {
    console.log(`Sua nota é ${nota} ! Recuperção!`)
} else {
    console.log(`Sua nota é ${nota} ! REPROVADO!`)
}