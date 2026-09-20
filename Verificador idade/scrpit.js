function verificar (){
    let data = new Date()
    let ano = data.getFullYear //é a função que tras o ano atual 
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        window.alert('Tudo ok')
    }
}