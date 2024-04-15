
const imagem = document.querySelector('#imagem')
const nomes = document.querySelector('#nomes')
const bt01 = document.querySelector('#cima')
const bt02 = document.querySelector('#duna')
const bt03 = document.querySelector('#panter')
const bt04 = document.querySelector('#miranha')

bt01.addEventListener('click', cima)
bt02.addEventListener('click', duna)
bt03.addEventListener('click', panter)
bt04.addEventListener('click', miranha)

function cima() {
    imagem.src = "images/filmes_14667_dont-look-up.jpg";
    nomes.textContent = "Dois astrônomos descobrem um cometa mortal vindo em direção à Terra e partem em um tour midiático para alertar a humanidade. Só que ninguém parece dar muita bola.";
}
function duna() {
    imagem.src = "images/filmes_16076_duna-parte-dois-poster.jpg";
    nomes.textContent = "Adaptação do clássico da ficção científica escrito por Frank Herbert em 1965, a história de Duna é ambientada num futuro distante, onde um império intergaláctico feudal domina todo o universo conhecido. Mas as atenções estão voltadas para Arrakis, um imenso e desértico planeta.";
}
function panter() {
    imagem.src = "images/Black_Panther_2018.jpg";
    nomes.textContent = " `Pantera Negra´ acompanha T´Challa que, após a morte de seu pai, o Rei de Wakanda, volta pra casa para a isolada e tecnologicamente avançada nação africana para a sucessão ao trono e para ocupar o seu lugar de direito como rei.";
}
function miranha() {
    imagem.src = "images/images.jpg";
    nomes.textContent = "Depois de ser picado por uma aranha geneticamente modificada, Peter Parker ganha super poderes e as habilidades da aranha para se agarrar a qualquer superfície. Ele promete usá-los para combater o crime e começa a entender as palavras de seu querido tio Ben: com grandes poderes vêm grandes responsabilidades.";
}


