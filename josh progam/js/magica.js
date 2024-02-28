// DOM
const bt01 = document.querySelector('#btNey')
const bt02 = document.querySelector('#btCris')
const bt03 = document.querySelector('#btJa')
const bt04 = document.querySelector('#btRafa')

// EVENTOS
bt01.addEventListener('click', NeymarJr)
bt02.addEventListener('click', Cristiano)
bt03.addEventListener('click', JaMorant)
bt04.addEventListener('click', RafaLeão)

//FUNÇÕES
function Cristiano() {
    icon.src = "images/cris.jpg"
}

function NeymarJr() {
    icon.src = " images/neymar.jpg  "
}

function JaMorant() {
    icon.src = "  images/ja.jpeg "
}


function RafaLeão() {
    icon.src = "   images/rafa.jpg  "
}