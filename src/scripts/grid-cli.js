const clicli = document.getElementById('clicli')

let path10 = 'src/images/clignotant/cli_'
let frame10 = 1
let interval10;
function start10 () {
    interval10 = setInterval(() => {
        setTimeout(() => {
            clicli.setAttribute('src', path10 + '2.jpg');
            frame10 = 2
        }, 200);
        setTimeout(() => {
            clicli.setAttribute('src', path10 + '1.jpg');
            frame10 = 1
        }, 400);
    }, 400);
}

function stop10() {
    clearInterval(interval10)
}

const startbtn10 = document.getElementById('start-button-cli')
const stopbtn10 = document.getElementById('stop-button-cli')
const pre10 = document.getElementById('pre-btn-cli')
const sui10 = document.getElementById('sui-btn-cli')

startbtn10.addEventListener('click', function () {
    start10()
    stopbtn10.parentElement.style.display='block'
    startbtn10.parentElement.style.display = 'none'
})

stopbtn10.addEventListener('click', function () {
    stop10()
    startbtn10.parentElement.style.display='block'
    stopbtn10.parentElement.style.display = 'none'
})

pre10.addEventListener('click', function () {
    if (frame10 === 1) {
        frame10 = 3
    }
    clicli.setAttribute('src',  path10 + (frame10 -1) + '.jpg')
    frame10--
})

sui10.addEventListener('click', function () {

    console.log(frame10)
    clicli.setAttribute('src',  path10 + (frame10) + '.jpg')
    frame10 = frame10 +1;
    if (frame10 == 3 ) {
        frame10 = 1
    }
})