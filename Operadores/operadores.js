//OPERADORES ARITIMÉTICOS

let a = 2
let b = 9
console.log('\n---OPERADODRES ARITIMÉTICOS---')

console.log( a + b) //soma
console.log( a - b) //subtração
console.log( a * b) //multiplivação
console.log( a / b) //divisão
console.log( a % b) //modulo (resto de divisão)
console.log( a ** b) //potência

//OPERADORES DE COMPARAÇÃO
console.log('\n---OPERADODRES DE COMPARAÇÃO---')
let c = 7
let d = '7'

console.log(c == d) // Se é igual
console.log(c === d) // Se é exatamente a mesma coisa
console.log(c != d) // Se é diferente o valor 
console.log(c !== d) // Se é diferente o valor e o tipo 
console.log(c > d) // Se é maior
console.log(c >= d) // Se é maior ou igual
console.log(c < d) // Se é menor
console.log(c <= d) // Se é menor ou igual

// OPERADORES LÓGICOS
console.log('\n---OPERADODRES LÓGICOS---')

let chocolate = true
let pipoca = false

console.log(chocolate == true && pipoca == true) // AND

let elseve = true
let siage = false 
console.log(chocolate == true || pipoca == true) // OR

let logado = true
console.log(!logado) // NOT (inverter o valor APENAS Boolean)

//OPERADORES DE ATRIBUIÇÃO
console.log('\n---OPERADODRES LÓGICOS---')

let pontos = 10
// pontos = pontos + 5
// pontos += 5
//console.log(pontos)

// pontos = pontos - 5
pontos -= 5
console.log(pontos)

// pontos = pontos * 5
pontos *= 5
console.log(pontos)

// pontos = pontos / 5
pontos /= 5
console.log(pontos)