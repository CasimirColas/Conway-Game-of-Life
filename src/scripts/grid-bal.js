const balbal = document.getElementById('balbal')

let path40 = '/Conway-Game-of-Life/src/images/balise/bal_'
let frame40 = 1
let interval40;
function start40 () {
    interval40 = setInterval(() => {
        setTimeout(() => {
            balbal.setAttribute('src', path40 + '2.jpg');
            frame40 = 2
        }, 200);
        setTimeout(() => {
            balbal.setAttribute('src', path40 + '1.jpg');
            frame40 = 1
        }, 400);
    }, 400);
}

function stop40() {
    clearInterval(interval40)
}

const startbtn40 = document.getElementById('start-button-bal')
const stopbtn40 = document.getElementById('stop-button-bal')
const pre40 = document.getElementById('pre-btn-bal')
const sui40 = document.getElementById('sui-btn-bal')

startbtn40.addEventListener('click', function () {
    start40()
    stopbtn40.parentElement.style.display='block'
    startbtn40.parentElement.style.display = 'none'
})

stopbtn40.addEventListener('click', function () {
    stop40()
    startbtn40.parentElement.style.display='block'
    stopbtn40.parentElement.style.display = 'none'
})

pre40.addEventListener('click', function () {
    if (frame40 === 1) {
        frame40 = 3
    }
    balbal.setAttribute('src',  path40 + (frame40 -1) + '.jpg')
    frame40--
})

sui40.addEventListener('click', function () {

    console.log(frame40)
    balbal.setAttribute('src',  path40 + (frame40) + '.jpg')
    frame40 = frame40 +1;
    if (frame40 == 3 ) {
        frame40 = 1
    }
})