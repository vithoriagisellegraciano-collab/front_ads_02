/**ALGORITMO 
 * 1- Pegar a referências dos dados do Formulário
 * 2- Armazenar e agrupar os dados em Estrutura de Dados adequada
 * 3- Criar um Modelo dinâmico de Card
 * 4- Renderizar o Modelo de Card com os dados armazenados
 * 5- Apagar os dados da lista (último inserido na lista) 
*/

//Pegando referências
const formulario = document.querySelector('#form-user')
const btnRemover = document.querySelector('#remover')
const conteinerCards = document.querySelector('#container-cards')

// Lista de produtos
const itensProdutos = []

// 1) RECEBER E ARMAZENAR OS DADOS
formulario.addEventListener('submit', function (event) {
    event.preventDefault()

    const titulo = document.querySelector('#nome').value.trim()
    const desc = document.querySelector('#desc').value.trim()
    const urlImagem = document.querySelector('#img').value.trim()

    // Agora armazena como OBJETO, não valores soltos
    const novoProduto = {
        titulo: titulo,
        desc: desc,
        urlImagem: urlImagem
    }

    itensProdutos.push(novoProduto)
    RenderizarCard()

    formulario.reset()
})


// 2) CRIAR TEMPLATE DO CARD
function criarCardNovo(produto) {

    // Criar os elementos
    const card = document.createElement('div')
    card.classList.add('card')

    const divImg = document.createElement('div')
    divImg.classList.add('imagem-container')

    const img = document.createElement('img')
    img.src = produto.urlImagem
    img.alt = produto.titulo

    const titulo = document.createElement('h3')
    titulo.textContent = produto.titulo

    const descricao = document.createElement('p')
    descricao.textContent = produto.desc

    // Montagem
    divImg.appendChild(img)
    card.appendChild(divImg)
    card.appendChild(titulo)
    card.appendChild(descricao)

    return card
}


// 3) RENDERIZAR NA TELA
function RenderizarCard() {
    conteinerCards.innerHTML = "" // limpa antes
    itensProdutos.forEach(function (produto) {
        const cardPronto = criarCardNovo(produto)
        conteinerCards.appendChild(cardPronto)
    })
}


// 4) REMOVER ÚLTIMO ITEM + ATUALIZAR
btnRemover.addEventListener('click', function () {
    if (itensProdutos.length === 0) {
        alert("Não há card para remover!")
        return
    }

    itensProdutos.pop()
    RenderizarCard()
})