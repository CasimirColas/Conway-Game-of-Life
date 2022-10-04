const rucruc = document.getElementById('rucruc')

let path20 = '/WCS/Conway-Game-of-Life/src/images/ruche/ruc_'
let frame20 = 1
let interval20;
function start20 () {
    interval20 = setInterval(() => {
        setTimeout(() => {
            rucruc.setAttribute('src', path20 + '2.jpg');
            frame20 = 2
        }, 200);
        setTimeout(() => {
            rucruc.setAttribute('src', path20 + '3.jpg');
            frame20 = 3
        }, 400);
        setTimeout(() => {
            rucruc.setAttribute('src', path20 + '1.jpg');
            frame20 = 1
        }, 600);
    }, 600);
}

function stop20() {
    clearInterval(interval20)
}

const startbtn20 = document.getElementById('start-button-ruc')
const stopbtn20 = document.getElementById('stop-button-ruc')
const pre20 = document.getElementById('pre-btn-ruc')
const sui20 = document.getElementById('sui-btn-ruc')

startbtn20.addEventListener('click', function () {
    start20()
    stopbtn20.parentElement.style.display='block'
    startbtn20.parentElement.style.display = 'none'
})

stopbtn20.addEventListener('click', function () {
    stop20()
    startbtn20.parentElement.style.display='block'
    stopbtn20.parentElement.style.display = 'none'
})

pre20.addEventListener('click', function () {
    if (frame20 === 1) {
        frame20 = 4
    }
    rucruc.setAttribute('src',  path20 + (frame20 -1) + '.jpg')
    frame20--
})

sui20.addEventListener('click', function () {

    console.log(frame20)
    rucruc.setAttribute('src',  path20 + (frame20) + '.jpg')
    frame20 = frame20 +1;
    if (frame20 == 4 ) {
        frame20 = 1
    }
})