// DOM
const bt01 = document.querySelector('#btClaro')
const bt02 = document.querySelector('#btEscuro')
const fundo = document.querySelector ('body')


// EVENTOS
bt01.addEventListener('click', Claro)
bt02.addEventListener('click', Escuro)



//FUNÇÕES


function Claro() {
    fundo.className = 'claro'
}

function Escuro() {
    fundo.className = 'escuro'
}

