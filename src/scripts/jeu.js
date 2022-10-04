let Uwidth = document.documentElement.clientWidth;
let Uhight = document.documentElement.clientHeight;
let grid = document.getElementsByClassName("actualGrid")
let maxGridLen = Math.floor(Uwidth*(15/700));
let maxGridHight = Math.floor(Uhight*(1/60))

window.addEventListener('load',responsive)
window.addEventListener('resize', responsive)

function responsive(){
    grid[0].textContent = ''
    Uwidth = document.documentElement.clientWidth;
    Uhight = document.documentElement.clientHeight;
    maxGridLen = Math.floor(Uwidth*(15/700));
    maxGridHight = Math.floor(Uhight*(1/60));
    grid[0].style.gridTemplateColumns = `repeat(${maxGridLen}, 40px)`;
    populate();
}

function populate(){
    for(let i=0;i<maxGridLen*maxGridHight;i++){
        createCell()
    }
}

function createCell(){
    const cell = document.createElement("button")
    cell.classList.add("cell")
    cell.setAttribute("id","dead")
    cell.setAttribute("onclick","convertCell(this)")
    grid[0].appendChild(cell)
}

function convertCell(element){
    console.log(element.id)
    if(element.id==="alive"){
        element.setAttribute("id","dead")
    }
    else if(element.id==="dead"){
        element.setAttribute("id","alive")
    }
}
