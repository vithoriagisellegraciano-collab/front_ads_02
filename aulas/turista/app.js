const lugares = ['Praia', 'Montanha', 'Cruzeiro']
const mensagem = `
-- ROTEIRO DE VIAGENS --
Lugares: ${lugares.join(', ')}
-----------------`
alert(mensagem)

const escolhaUsuario = prompt('Para onde deseja viajar?')

if (escolhaUsuario == null || escolhaUsuario.trim() === '') {
    alert('Por favor, digite um valor da lista de viagem!')
} else {
    const escolhaFormatada = escolhaUsuario.trim().toLowerCase()

    if (escolhaFormatada === 'praia') {
        window.location.href = './praia.html'
    } else if (escolhaFormatada === 'montanha') {
        window.location.href = './montanha.html'
    } else if (escolhaFormatada === 'cruzeiro') {
        window.location.href = './cruzeiro.html'
    } else {
        alert('Destino inválido! Escolha entre: Praia, Montanha ou Cruzeiro.')
    }
}
