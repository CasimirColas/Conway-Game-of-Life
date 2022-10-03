const clicli = document.getElementById('clicli')

let path = '/WCS/Conway-Game-of-Life/src/images/clignotant/cli_'
let frame = 1
let interval;
function start () {
    interval = setInterval(() => {
        setTimeout(() => {
            clicli.setAttribute('src', path + '2.jpg');
            frame = 2
        }, 200);
        setTimeout(() => {
            clicli.setAttribute('src', path + '3.jpg');
            frame = 3
        }, 400);
        setTimeout(() => {
            clicli.setAttribute('src', path + '4.jpg');
            frame = 4
        }, 600);
        setTimeout(() => {
            clicli.setAttribute('src', path + '1.jpg');
            frame = 1
        }, 800);
    }, 800);
}

function stop() {
    clearInterval(interval)
}

const startbtn = document.getElementById('start-button')
const stopbtn = document.getElementById('stop-button')
const pre = document.getElementById('pre-btn')
const sui = document.getElementById('sui-btn')

startbtn.addEventListener('click', function () {
    start()
    stopbtn.parentElement.style.display='block'
    startbtn.parentElement.style.display = 'none'
})

stopbtn.addEventListener('click', function () {
    stop()
    startbtn.parentElement.style.display='block'
    stopbtn.parentElement.style.display = 'none'
})

pre.addEventListener('click', function () {
    if (frame === 1) {
        frame = 5
    }
    clicli.setAttribute('src',  path + (frame -1) + '.jpg')
    frame--
})

sui.addEventListener('click', function () {

    console.log(frame)
    clicli.setAttribute('src',  path + (frame) + '.jpg')
    frame = frame +1;
    if (frame == 5 ) {
        frame = 1
    }
})