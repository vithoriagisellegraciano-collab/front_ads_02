/**ALGORITMO 
 * 1- Pegar a referências dos dados do Formulário
 * 2- Armazenar e agrupar os dados em Estrutura de Dados adequada
 * 3- Criar um Modelo dinâmico de Card
 * 4- Renderizar o Modelo de Card com os dados armazenados
 * 5- Apagar os dados da lista (último inserido na lista) 
 * 
 * CARD (3 linhas Div com img, h3, p) Classe CSS do card: 'card','imagem-container'
 * Após cada operação imporante Limpar Cache ou Atualizar Card
*/

const formulario = document.querySelector('#form-user')

const btnRemover = document.querySelector('#remover')
const conteinerCards = document.querySelector('#container-cards')

const itensProdutos = [
    // {nome: "Prod1", desc:"", url: "http://dfaffdas"},
    // {nome: "Prod1", desc:"", url: "http://dfaffdas"},
]

// addEventlistener => Executador de eventos
formulario.addEventListener('submit', function (event) {
    event.preventDefault()
    // alert('funcionou')
    const titulo = document.querySelector('#nome').value.trim()
    const desc = document.querySelector('#desc').value.trim()
    const urlImagem = document.querySelector('#img').value.trim()
    itensProdutos.push({ titulo, desc, urlImagem })

    console.log(itensProdutos)=

    formulario.reset()
})

//CRIAR UMA FUNÇAO QUE GERA O TAMPLATE DOC ARD 
    function criarCardNovo(){

//TODO:criar tags html e retornar 

    }
    // renderizar o card novo na pagina web 
    function renderizarCard(){
        // TODO: inserir card atualizado na pagina
    }

    btnRemover.addEventListener('click', function() {
        alert('isso vai acabar deletando o card')
    })