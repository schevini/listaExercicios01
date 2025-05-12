const prompt = require('prompt-sync')()

let opcao = Number(prompt('Escolha uma das opção 1, 2 e 3:  '))
switch(opcao) {
    case 1: console.log('Você selecionou a primeira opção!')
    break
    case 2: console.log('Você selecionou a segunda opção!')
    break
    case 3: console.log('Você selecionou a terceira opção!')
    break
    default: console.log('Opção inválida!')
}