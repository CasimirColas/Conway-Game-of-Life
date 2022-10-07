const cracra = document.getElementById('cracra')

let path50 = '/Conway-Game-of-Life/src/images/crapeau/cra_'
let frame50 = 1
let interval50;
function start50 () {
    interval50 = setInterval(() => {
        setTimeout(() => {
            cracra.setAttribute('src', path50 + '2.jpg');
            frame50 = 2
        }, 200);
        setTimeout(() => {
            cracra.setAttribute('src', path50 + '1.jpg');
            frame50 = 1
        }, 400);
    }, 400);
}

function stop50() {
    clearInterval(interval50)
}

const startbtn50 = document.getElementById('start-button-cra')
const stopbtn50 = document.getElementById('stop-button-cra')
const pre50 = document.getElementById('pre-btn-cra')
const sui50 = document.getElementById('sui-btn-cra')

startbtn50.addEventListener('click', function () {
    start50()
    stopbtn50.parentElement.style.display='block'
    startbtn50.parentElement.style.display = 'none'
})

stopbtn50.addEventListener('click', function () {
    stop50()
    startbtn50.parentElement.style.display='block'
    stopbtn50.parentElement.style.display = 'none'
})

pre50.addEventListener('click', function () {
    if (frame50 === 1) {
        frame50 = 3
    }
    cracra.setAttribute('src',  path50 + (frame50 -1) + '.jpg')
    frame50--
})

sui50.addEventListener('click', function () {

    console.log(frame50)
    cracra.setAttribute('src',  path50 + (frame50) + '.jpg')
    frame50 = frame50 +1;
    if (frame50 == 3 ) {
        frame50 = 1
    }
})