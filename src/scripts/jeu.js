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
    let column = 0
    let row = 0
    for(let i=0;i<maxGridLen*maxGridHight;i++){
        createCell(column,row)
        column ++
        if(column===maxGridLen){
            row ++
            column = 0
        }
    }
}

function createCell(column,row){
    const cell = document.createElement("div")
    cell.classList.add("cell")
    cell.setAttribute("data-column",`${column}`)
    cell.setAttribute("data-row",`${row}`)
    cell.setAttribute("data-status","dead")
    cell.setAttribute("onclick","convertCell(this)")
    grid[0].appendChild(cell)
}

function convertCell(element){
    if(element.dataset.status==="alive"){
        element.setAttribute("data-status","dead")
    }
    else if(element.dataset.status==="dead"){
        element.setAttribute("data-status","alive")
    }
}
