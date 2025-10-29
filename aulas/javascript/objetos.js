// dados simples: numericos, strings, boolean...
// array: [1,2,3, 'ana']
// objetos: {nome: 'Luana', idade: 21}
// funcões: function somar  (){}, () => {}

//     {
// propriedade: valor
// // key : value
//     }
const perfil = {
      nome: 'Vithoria Giselle',
     idade : 45,
     profissao: "professor",
     solteiro: true,
     roupas: ['camiseta', 'calca',  'jeans']
    
}

console.log (Object.entries(perfil)) // traz chave e valor
console.log (Object.keys(perfil)) // traz só chaves 
console.log (Object.values(perfil)) // traz só valores



// let dadosPerfil = []

// for (let dado in perfil) {
// dadosPerfil.push(perfil[dado])
// }

// alert (dadosPerfil)

// for(let dados in perfil) {
//     console.log(perfil[dados])

// atribuicoes dinamica
// perfil.roupas = [ 'camiseta', 'calca', 'jeans' ]
// console.log(perfil.nome)
// console.log(perfil.idade)
// console.log(perfil.profissao)
// console.log(perfil.solteiro)
// console.log(perfil.roupas)
