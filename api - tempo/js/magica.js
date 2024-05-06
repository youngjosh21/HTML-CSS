const entrada_cidade = document.querySelector('.input-cidade')
const botao = document.querySelector('.botao-busca')
const nome_cidade = document.querySelector('.cidade')
const temperatura = document.querySelector('.temp')
const previsao = document.querySelector('.texto-previsao')
const key = 'cd55770da28382cab1f631d83c4aab1d'

//


botao.addEventListener('click', buscacidade)


async function buscacidade() {


    cidade = entrada_cidade.value
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)
    .then(resposta => resposta.json())
    console.log(dados)


}
