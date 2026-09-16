function carregar() {
let msg = window.document.getElementById('msg')
let img = window.document.getElementById('imagem')
let data= new Date()
let hora = data.getHours
msg.innerHTML = `Agora são ${horas} horas.`
}
if (hora >=0 && hora < 12) {
    // BOM DIA 
}
else if (hora >= 12 && hora < 18) {
    //BOA TARDE
}