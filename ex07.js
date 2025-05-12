const prompt = require('prompt-sync')()

let maca = (prompt('Digite o número de maçãs que deseja comprar: '))
let preco

if (maca < 12) {
    preco = 0.30
} else {
    preco = 0.25
}
let total = maca * preco
console.log(`Você comprou ${maca} maçãs no total de R$${total}`)