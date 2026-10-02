function verificar (){
    let data = new Date()
    let ano = data.getFullYear ()//é a função que tras o ano atual 
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if(fano.value.length == 0 /*verificando se a caixa está vazia ou não */ || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        let genero = ''
        if(fsex[1].checked) {
            genero = 'Mulher'
        }
        res.style.textAling = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    } 

    
}