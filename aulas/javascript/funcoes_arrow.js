// Funções Arraw são funções anônimas, ou seja, sem NOME 
// Podem ser passadas como parâmetros para outras funções
// ou podem ser atribuidas á variaveis.
// Em JS, funções são conhecidas como
// "Cidadão de primeira classe."

// let numero = 0 
// setInterval(function(){
//     numero = numero + 10
//     console.log(numero)
// }, 1000)

let numero = 2;
const intervalo1 = setInterval(() => {
  numero = numero + 15
  console.log(numero)
}, 1000)

setTimeout( ()=> {
    clearInterval(intervalo1)
}, 5000)