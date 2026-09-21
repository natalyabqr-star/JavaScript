function verificar() {
    let data = new Date()
    let ano = data.getFullYear() // Ano atual
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        let fsex = document.getElementsByName('radsex') // Adicionadas as aspas
        let idade = ano - Number(fano.value)
        let genero = ''
        
        if (fsex[0].checked) {
            genero = 'Homem'
        } else if (fsex[1].checked) { // Adicionado o .checked
            genero = 'Mulher'
        }
        
        // Exemplo de como finalizar o innerHTML para exibir o resultado
        res.innerHTML = `Detectamos ${genero} com incríveis ${idade} anos.`
    } 
}