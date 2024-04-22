const pipe = document.querySelector('.pipe')
const mario = document.querySelector('.mario')

const jump = () => {
    mario.src = 'images/clouds.png'
    mario.classList.add('jump');
    
    setTimeout(() => {
        mario.classList.remove('jump');
        mario.src = 'images/mario.gif'


    }, 500);
}

const loop = setInterval(() => {
    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    // console.log(pipePosition)
    console.log(marioPosition);



    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);

    }

}, 10)
document.addEventListener('keydown', jump);
