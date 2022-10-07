const pulpul = document.getElementById('pulpul')

let path70 = '/Conway-Game-of-Life/src/images/pulsar/pul_'
let frame70 = 1
let interval70;
function start70 () {
    interval70 = setInterval(() => {
        setTimeout(() => {
            pulpul.setAttribute('src', path70 + '2.jpg');
            frame70 = 2
        }, 200);
        setTimeout(() => {
            pulpul.setAttribute('src', path70 + '3.jpg');
            frame70 = 2
        }, 400);
        setTimeout(() => {
            pulpul.setAttribute('src', path70 + '4.jpg');
            frame70 = 2
        }, 600);
        setTimeout(() => {
            pulpul.setAttribute('src', path70 + '5.jpg');
            frame70 = 2
        }, 800);
        setTimeout(() => {
            pulpul.setAttribute('src', path70 + '6.jpg');
            frame70 = 2
        }, 1000);
        setTimeout(() => {
            pulpul.setAttribute('src', path70 + '7.jpg');
            frame70 = 2
        }, 1200);
        setTimeout(() => {
            pulpul.setAttribute('src', path70 + '8.jpg');
            frame70 = 2
        }, 1400);
        setTimeout(() => {
            pulpul.setAttribute('src', path70 + '9.jpg');
            frame70 = 2
        }, 1600);
        setTimeout(() => {
            pulpul.setAttribute('src', path70 + '10.jpg');
            frame70 = 2
        }, 1800);
        setTimeout(() => {
            pulpul.setAttribute('src', path70 + '11.jpg');
            frame70 = 2
        }, 2000);
        setTimeout(() => {
            pulpul.setAttribute('src', path70 + '12.jpg');
            frame70 = 2
        }, 2200);
        setTimeout(() => {
            pulpul.setAttribute('src', path70 + '13.jpg');
            frame70 = 2
        }, 2400);
        setTimeout(() => {
            pulpul.setAttribute('src', path70 + '14.jpg');
            frame70 = 2
        }, 2600);
        setTimeout(() => {
            pulpul.setAttribute('src', path70 + '15.jpg');
            frame70 = 2
        }, 2800);
        setTimeout(() => {
            pulpul.setAttribute('src', path70 + '16.jpg');
            frame70 = 2
        }, 3000);
        setTimeout(() => {
            pulpul.setAttribute('src', path70 + '17.jpg');
            frame70 = 2
        }, 3200);
        setTimeout(() => {
            pulpul.setAttribute('src', path70 + '18.jpg');
            frame70 = 2
        }, 3400);
        setTimeout(() => {
            pulpul.setAttribute('src', path70 + '19.jpg');
            frame70 = 2
        }, 3600);
        setTimeout(() => {
            pulpul.setAttribute('src', path70 + '20.jpg');
            frame70 = 2
        }, 3800);
        setTimeout(() => {
            pulpul.setAttribute('src', path70 + '1.jpg');
            frame70 = 1
        }, 4000);
    }, 4000);
}

function stop70() {
    clearInterval(interval70)
}

const startbtn70 = document.getElementById('start-button-pul')
const stopbtn70 = document.getElementById('stop-button-pul')
const pre70 = document.getElementById('pre-btn-pul')
const sui70 = document.getElementById('sui-btn-pul')

startbtn70.addEventListener('click', function () {
    start70()
    stopbtn70.parentElement.style.display='block'
    startbtn70.parentElement.style.display = 'none'
})

stopbtn70.addEventListener('click', function () {
    stop70()
    startbtn70.parentElement.style.display='block'
    stopbtn70.parentElement.style.display = 'none'
})

pre70.addEventListener('click', function () {
    if (frame70 === 1) {
        frame70 = 21
    }
    pulpul.setAttribute('src',  path70 + (frame70 -1) + '.jpg')
    frame70--
})

sui70.addEventListener('click', function () {

    console.log(frame70)
    pulpul.setAttribute('src',  path70 + (frame70) + '.jpg')
    frame70 = frame70 +1;
    if (frame70 == 21 ) {
        frame70 = 1
    }
})