const foclifocli = document.getElementById('foclifocli')

let path30 = 'src/images/fourclignotant/focli-'
let frame30 = 1
let interval30;
function start30 () {
    interval30 = setInterval(() => {
        setTimeout(() => {
            foclifocli.setAttribute('src', path30 + '2.jpg');
            frame30 = 2
        }, 200);
        setTimeout(() => {
            foclifocli.setAttribute('src', path30 + '3.jpg');
            frame30 = 3
        }, 400);
        setTimeout(() => {
            foclifocli.setAttribute('src', path30 + '4.jpg');
            frame30 = 3
        }, 600);
        setTimeout(() => {
            foclifocli.setAttribute('src', path30 + '5.jpg');
            frame30 = 3
        }, 800);
        setTimeout(() => {
            foclifocli.setAttribute('src', path30 + '6.jpg');
            frame30 = 3
        }, 1000);
        setTimeout(() => {
            foclifocli.setAttribute('src', path30 + '7.jpg');
            frame30 = 3
        }, 1200);
        setTimeout(() => {
            foclifocli.setAttribute('src', path30 + '8.jpg');
            frame30 = 3
        }, 1400);
        setTimeout(() => {
            foclifocli.setAttribute('src', path30 + '9.jpg');
            frame30 = 3
        }, 1600);
        setTimeout(() => {
            foclifocli.setAttribute('src', path30 + '10.jpg');
            frame30 = 4
        }, 1800);
        setTimeout(() => {
            foclifocli.setAttribute('src', path30 + '1.jpg');
            frame30 = 1
        }, 2000);
    }, 2000);
}

function stop30() {
    clearInterval(interval30)
}

const startbtn30 = document.getElementById('start-button-focli')
const stopbtn30 = document.getElementById('stop-button-focli')
const pre30 = document.getElementById('pre-btn-focli')
const sui30 = document.getElementById('sui-btn-focli')

startbtn30.addEventListener('click', function () {
    start30()
    stopbtn30.parentElement.style.display='block'
    startbtn30.parentElement.style.display = 'none'
})

stopbtn30.addEventListener('click', function () {
    stop30()
    startbtn30.parentElement.style.display='block'
    stopbtn30.parentElement.style.display = 'none'
})

pre30.addEventListener('click', function () {
    if (frame30 === 1) {
        frame30 = 11
    }
    foclifocli.setAttribute('src',  path30 + (frame30 -1) + '.jpg')
    frame30--
})

sui30.addEventListener('click', function () {

    console.log(frame30)
    foclifocli.setAttribute('src',  path30 + (frame30) + '.jpg')
    frame30 = frame30 +1;
    if (frame30 == 11 ) {
        frame30 = 1
    }
})