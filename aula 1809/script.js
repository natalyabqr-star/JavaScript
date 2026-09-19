//alert("Olá mundo")

//sintaxe


//tipos 
const string = 'Texto'
const number =  10  //podeia entrar numeros diversos
const boolean = true // pode ser true ou false

//operadores 
const a = 8
const b = 2
const soma = 8 + 2

//console.log(soma)

//funções
function salvarExibirNomeIdade () {
    let nome = prompt('Olá, qual é seu nome?') // o let serve para guardar e se preciso podemos manipular
    let cidade = prompt(' Olá ' +  nome  + ', onde você mora')
    let faculdade = prompt( ' Você estuda aonde? ')

    document.body.innerHTML = 'Seu nome é ' + nome + " e você mora em " + cidade + '.' + ' você estuda ' + faculdade + '.'
}
//salvarExibirNomeIdade()

// estrutura de controle 
function demonstrarEstruturas() {
    const nome = "Mario"
    const idade = 67

    if (idade >= 18) {
        console.log("Você é maior de idade")
    } else {
        console.log('Você é menor de idade')
    }
}
//demonstrarEstruturas()
//objetos 
/*let pessoas = {
    nome: "pessoa",
    sobrenome: "prebianchi",
    idade: 67,
}*/








// arrays 
/*let pessoas = [
    {
        nome: 'Sheila',
        sobrenome: 'Santana',
        idade: 67
    },
       {
        nome: 'Maria',
        sobrenome: 'Eduarda',
        idade: 11
    },
       {
        nome: 'José',
        sobrenome: 'Santos',
        idade: 42
    }
]
console.log(pessoas[0].sobrenome)
console.log(pessoas[2].idade)
console.log(pessoas[2].nome)*/

//testando outro jeito da função if e else: switc

let agora = new Date()
let diaSem = agora.getDay()

diaSem = 5

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Qurata')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6: 
         console.log('Sábado')
         break
    default:
        console.log('[ERRO] Dia inválido')
        break
}