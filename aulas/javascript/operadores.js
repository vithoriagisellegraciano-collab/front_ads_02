//**operadores aritmeticos */
// + - * / % **

/** outros operadores */

// > >= < <= != (maior, maior que, menor, menor que, diferente)
// && || (E lógico, ou lógico)

/*const ehpar = 12 // number 
 
console.log(ehpar % 2 == 0)
 if( ehpar % 2 == 0) {
     // trata quando a condição for verdadeira
alert ('o número ' + ehpar + ' é par!')
 }else {
    //trata a condição quando falsa
 alert ('o numero ' + ehpar + ' é ímpar!')
 }

 console.log (ehpar % 2 == 0)
 */
// pessoas com idade entre 18 e 70 anos podem entrar
//pessoas com mais 70 anos precisam de acompanhante
// menores, vazam!
 
const idade = prompt("Digite sua idade:");

if (isNaN(idade) || idade.trim() === "") {
  alert("Erro! Digite sua idade");
} else {
  const idadeNum = Number(idade);

  if (idadeNum >= 18 && idadeNum < 70) {
    alert("Você tem " + idadeNum + " anos\nPode entrar no baile!");
  } else if (idadeNum >= 70) {
    alert("Você tem " + idadeNum + " anos\nPrecisa de um acompanhante");
  } else {
    alert("Você tem " + idadeNum + " anos\nVaza criança!");
  }
}
