alert("Olá mundo")

//sintaxe


//tipos 
const string = 'Texto'
const number =  10  //podeia entrar numeros diversos
const boolean = true // pode ser true ou false


//funções
function salvarExibirNomeIdade () {
    let nome = prompt('Olá, qual é seu nome') // o let serve para guardar e se preciso podemos manipular
    let idade = prompt('Oi' + nome + ', agora, qual é a sua idade?')

    document.body.innerHTML = 'Seu nome é' + nome + "e voce tem" + idade
}
salvarExibirNomeIdade()

// estrutura de controle 

// arrays

// objetos 