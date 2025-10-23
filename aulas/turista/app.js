
   
        const lugares = ['praia', 'montanha']
        const mensagem = `
    -- ROTEIRO DE VIAGENS --
    Lugares:  ${lugares}
    -----------------`
        alert(mensagem) //fake null
        const escolhaUsuario = prompt(' Para onde deseja viajar? ')
        if (escolhaUsuario == null || escolhaUsuario == '') {
            alert('Por favor digite um valor da lista de viagem!')
        }
        else {
            if (lugares.includes(escolhaUsuario)) {
                if (escolhaUsuario == 'praia') {
                   // alert('Praia foi escolhido!')
                   window.location.href = './praia.html'
                }
                else if (escolhaUsuario == 'montanha') {
                    // alert('Montanha foi escolhido!')
                    window.location.href = './montanha.html'
                }
            }
        }






  
