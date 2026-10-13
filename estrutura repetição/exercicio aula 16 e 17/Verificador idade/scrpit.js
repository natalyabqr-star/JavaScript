function contar() {
    let ini = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        // 1) VALIDAR O PASSO: se p for 0 ou negativo, o que fazer?
        //    (avisar, ou trocar p por 1)

        // 2) O FOR:
        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F34E} ` // \u{1F34E} é o emoji de uva
        }

        // 3) EMOJI FINAL em res.innerHTML
    }
} 