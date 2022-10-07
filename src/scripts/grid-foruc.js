const forucforuc = document.getElementById('forucforuc')

let path60 = '/Conway-Game-of-Life/src/images/fourruche/foru_'
let frame60 = 1
let interval60;
function start60 () {
    interval60 = setInterval(() => {
        setTimeout(() => {
            forucforuc.setAttribute('src', path60 + '2.jpg');
            frame60 = 2
        }, 200);
        setTimeout(() => {
            forucforuc.setAttribute('src', path60 + '3.jpg');
            frame60 = 2
        }, 400);
        setTimeout(() => {
            forucforuc.setAttribute('src', path60 + '4.jpg');
            frame60 = 2
        }, 600);
        setTimeout(() => {
            forucforuc.setAttribute('src', path60 + '5.jpg');
            frame60 = 2
        }, 800);
        setTimeout(() => {
            forucforuc.setAttribute('src', path60 + '6.jpg');
            frame60 = 2
        }, 1000);
        setTimeout(() => {
            forucforuc.setAttribute('src', path60 + '7.jpg');
            frame60 = 2
        }, 1200);
        setTimeout(() => {
            forucforuc.setAttribute('src', path60 + '8.jpg');
            frame60 = 2
        }, 1400);
        setTimeout(() => {
            forucforuc.setAttribute('src', path60 + '9.jpg');
            frame60 = 2
        }, 1600);
        setTimeout(() => {
            forucforuc.setAttribute('src', path60 + '10.jpg');
            frame60 = 2
        }, 1800);
        setTimeout(() => {
            forucforuc.setAttribute('src', path60 + '11.jpg');
            frame60 = 2
        }, 2000);
        setTimeout(() => {
            forucforuc.setAttribute('src', path60 + '12.jpg');
            frame60 = 2
        }, 2200);
        setTimeout(() => {
            forucforuc.setAttribute('src', path60 + '13.jpg');
            frame60 = 2
        }, 2400);
        setTimeout(() => {
            forucforuc.setAttribute('src', path60 + '14.jpg');
            frame60 = 2
        }, 2600);
        setTimeout(() => {
            forucforuc.setAttribute('src', path60 + '15.jpg');
            frame60 = 2
        }, 2800);
        setTimeout(() => {
            forucforuc.setAttribute('src', path60 + '16.jpg');
            frame60 = 2
        }, 3000);
        setTimeout(() => {
            forucforuc.setAttribute('src', path60 + '17.jpg');
            frame60 = 2
        }, 3200);
        setTimeout(() => {
            forucforuc.setAttribute('src', path60 + '18.jpg');
            frame60 = 2
        }, 3400);
        setTimeout(() => {
            forucforuc.setAttribute('src', path60 + '19.jpg');
            frame60 = 2
        }, 3600);
        setTimeout(() => {
            forucforuc.setAttribute('src', path60 + '20.jpg');
            frame60 = 2
        }, 3800);
        setTimeout(() => {
            forucforuc.setAttribute('src', path60 + '1.jpg');
            frame60 = 1
        }, 4000);
    }, 4000);
}

function stop60() {
    clearInterval(interval60)
}

const startbtn60 = document.getElementById('start-button-foruc')
const stopbtn60 = document.getElementById('stop-button-foruc')
const pre60 = document.getElementById('pre-btn-foruc')
const sui60 = document.getElementById('sui-btn-foruc')

startbtn60.addEventListener('click', function () {
    start60()
    stopbtn60.parentElement.style.display='block'
    startbtn60.parentElement.style.display = 'none'
})

stopbtn60.addEventListener('click', function () {
    stop60()
    startbtn60.parentElement.style.display='block'
    stopbtn60.parentElement.style.display = 'none'
})

pre60.addEventListener('click', function () {
    if (frame60 === 1) {
        frame60 = 21
    }
    forucforuc.setAttribute('src',  path60 + (frame60 -1) + '.jpg')
    frame60--
})

sui60.addEventListener('click', function () {

    console.log(frame60)
    forucforuc.setAttribute('src',  path60 + (frame60) + '.jpg')
    frame60 = frame60 +1;
    if (frame60 == 21 ) {
        frame60 = 1
    }
})