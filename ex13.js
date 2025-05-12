const prompt = require('prompt-sync')()

let resposta = null
let soma = 0
let contador = 0

while(resposta != 0){
    resposta= Number(prompt('Informe números decimais: (Para calcular a média final digite 0):'))

    soma += resposta
    contador++
}

let mediaFinal = soma/(contador-1)
console.log(`A média final é: ${mediaFinal}`)