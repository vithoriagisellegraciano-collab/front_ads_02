//window.alert ('OI SER HUMANO!')
//console.log('meu nome nao é jhonny');

/*
- Variáveis são espaços em memória usados para armazenar dados reaproveitáveis
var - Desaconselhável
let - Valor que poderá variar
const - valor que não deve variar
*/ 

let nome = prompt("Qual é o seu nome? ") // o sinal de '=' é o mesmo que atribuir valores
let sobrenome = prompt("qual o seu sobrenome? ")
console.log(nome +" "+ sobrenome) //O sinal + é usado para "concatenar" valores
const cpf = prompt("Qual o seu CPF [somente numeros]? ")
const solteiro = true
const roupa = prompt("Qual o seu estilo de roupa? ")

console.log("----PERFIL----\n ")
console.log ("Nome: " + nome)
console.log ("sobrenome: " + sobrenome)
console.log ("cpf: " + cpf)
console.log ("solteiro: "  + solteiro)
console.log ("roupa: " + roupa)