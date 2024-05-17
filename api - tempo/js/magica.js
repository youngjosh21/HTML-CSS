const entrada_cidade = document.querySelector('.input-cidade')
const botao = document.querySelector('.botao-busca')
const nome_cidade = document.querySelector('.cidade')
const temperatura = document.querySelector('.temp')
const previsao = document.querySelector('.texto-previsao')
const key = 'cd55770da28382cab1f631d83c4aab1d'
const imagem = document.querySelector('#imagem')

//


botao.addEventListener('click', buscacidade)


async function buscacidade() {


    cidade = entrada_cidade.value
    // fetch motoboy pegar o componente se picar, só volte com a resposta
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)
        .then(resposta => resposta.json())
    console.log(dados)
    
    nome_cidade.textContent = `Tempo em ${dados.name}`
    temperatura.textContent = `Temperatura de ${dados.main.temp.toFixed(0)}°C`
    previsao.textContent = `${dados.weather[0].description}`
    imagem.src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`    

}
