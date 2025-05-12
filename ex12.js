const prompt = require('prompt-sync')()

let numeroTabuada = Number(prompt('Qual número vc deseja tabular? '))
let resultado = 0

for(let i = 1; i <= 10; i++) {
    resultado = numeroTabuada*i
    console.log(resultado)
}

