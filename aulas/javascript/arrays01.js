/*
Arrays são agrupadores de valores numéricos, textuais, booleanos,objetos, etc.
Eles são ordenados a partir do índice '0'
Ex.: const time = ['Pedro', 22, 'Julio', 'Ana']
          // indices   0     1      2       3
 */
const vestuario = ['camiseta', 'calca', 'tenis', 'meias', 'bones', 'oculos']
vestuario[33] = 'chapeu'
vestuario[6] = 'regata'

for(let valor in vestuario) {
    console.log(valor)
}
// console.log(vestuario[3])
// console.log(vestuario[6])
// console.log(vestuario[1])
// console.log(vestuario[33])