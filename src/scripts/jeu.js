let Uwidth = undefined
let Uhight = undefined
let grid = document.getElementsByClassName("actualGrid")[0]
let rawDisplay = document.getElementsByClassName("gridSizeNumber")[0]
let cells = undefined
let stepCounter = document.getElementById('counter')
let cellsList = []
let maxGridLen = Math.floor(Uwidth*(15/700))
let maxGridHight = Math.floor(Uhight*(1/60))
let maxSteps = 0
let speed = 0
let moreRows = 0
let simPlaying = false

window.addEventListener('resize', responsive)
window.addEventListener('DOMContentLoaded',()=>{
    responsive()
})
function getMaxSteps(button){
    let input = parseInt(button.value)
    if(button.value===""){
        maxSteps = 0
    }else{
        maxSteps = input
    }
}

function getSpeed(button){
    let input = parseInt(button.value)
    if(button.value===""){
        speed = 0
    }else{
        speed = input
    }
}

function addRowSlider(button){
    button.setAttribute("min",-maxGridHight)
    button.setAttribute("max",maxGridHight*2)
    let input = parseInt(button.value)
    if(button.value===""){
        moreRows = 0
        document.getElementsByName
    }else{
        moreRows = input
    }
    populate()
}

function addRowInput(button){
    let input = parseInt(button.value)
    if(button.value===""){
        moreRows = 0
    }else{
        moreRows = input
    }
    populate()
}

function responsive(){
    grid.textContent = ''
    Uwidth = document.documentElement.clientWidth;
    Uhight = document.documentElement.clientHeight;
    maxGridLen = Math.floor(Uwidth*(15/700));
    maxGridHight = Math.floor(Uhight*(1/60));
    grid.style.gridTemplateColumns = `repeat(${maxGridLen}, 40px)`;
    [cells,cellsList] = populate();
}

function populate(){
    grid.textContent = ''
    let column = 0
    let row = 0
    let fullgrid = []
    for(let i=0;i<maxGridLen*(maxGridHight+moreRows);i++){
        createCell(column,row,'dead')
        fullgrid.push(`${column}-${row}`)
        column ++
        if(column===maxGridLen){
            row ++
            column = 0
        }
    }
    rawDisplay.setAttribute('placeholder',maxGridHight+moreRows)
    return [document.getElementsByClassName('cell'),fullgrid]
}

function createCell(column,row,status){
    const cell = document.createElement("div")
    cell.classList.add("cell")
    cell.setAttribute("data-column",`${column}`)
    cell.setAttribute("data-row",`${row}`)
    cell.setAttribute("data-status",`${status}`)
    cell.setAttribute("onclick","convertbyTouch(this)")
    grid.appendChild(cell)
}

function convertbyTouch(cell){
    if(cell.dataset.status==="alive"){
        cell.setAttribute("data-status","dead")
    }
    else if(cell.dataset.status==="dead"){
        cell.setAttribute("data-status","alive")
    }
}

function converbyPos(cellPosString){
    let cell = cells[getCellNumber(cellPosString)]
    if(cell.dataset.status==="alive"){
        cell.setAttribute("data-status","dead")
    }
    else if(cell.dataset.status==="dead"){
        cell.setAttribute("data-status","alive")
    }
}

function cellPos(cell){ 
    let {column,row} = cell.dataset
    return [parseInt(column),parseInt(row)]
}

function neighbours(cellPos){
    let [column,row] = cellPos
    let potNeighbours =[[column-1,row-1],
                        [column-1,row],
                        [column-1,row+1],
                        [column,row-1],
                        [column,row+1],
                        [column+1,row-1],
                        [column+1,row],
                        [column+1,row+1],
                        ]

    let realNeighbours = potNeighbours.filter((pos) => cellsList.includes(`${pos[0]}-${pos[1]}`))
    return realNeighbours
}

function getCellNumber(cellPosString){
    return cellsList.findIndex((element) => element === cellPosString)
}

function cellTest(cell){
    let exNeightbour = neighbours(cellPos(cell)).map((pos) => `${pos[0]}-${pos[1]}`)
    if(cell.dataset.status==="alive"){
        let aliveCounter = 0
        for(let i in exNeightbour){
            if(cells[getCellNumber(exNeightbour[i])].dataset.status==="alive"){
                aliveCounter++
            }
        }
        if(aliveCounter===2 || aliveCounter===3){
            return true
        }else{
            return false
        }   
    }else if(cell.dataset.status==="dead"){
        let aliveCounter = 0
        for(let i in exNeightbour){
            if(cells[getCellNumber(exNeightbour[i])].dataset.status==="alive"){
                aliveCounter++
            }
        }
        if(aliveCounter===3){
            return true
        }else{
            return false
        } 
    }
}

function nextStepSim(cellsList){
    let livingCells =[]
    for(let i in cellsList){
        if(cellTest(cells[i])){
            livingCells.push(`${cells[i].dataset.column}-${cells[i].dataset.row}`)
        }
    }
    populate()
    for(let j in livingCells){
        converbyPos(livingCells[j])
    }
    iterateCounter()
}

function launchSim(cellsList){
    counter.textContent = 0
    if(speed===0){
        speed = 700
    }else{
        speed = speed
    }

    if(maxSteps===0){
        maxSteps = 50
    }else{
        maxSteps = maxSteps
    }
    if(!simPlaying){
        simPlaying = true
        let actualStep = 0

        function myLoop() {
            setTimeout(function() {
                nextStepSim(cellsList)
                actualStep++;
                if (actualStep < maxSteps && simPlaying) {
                    myLoop();
                }else{
                    simPlaying = false
                }
            }, speed)
          }
        myLoop()
    }
}

function stopSim(){
    simPlaying = false
}

function iterateCounter(){
    counter.textContent = `${parseInt(counter.textContent)+1}`
}

function reset(){
    counter.textContent = 0
    populate()
}

function radomGrid(){
    reset()
    grid.textContent = ''
    let column = 0
    let row = 0
    let fullgrid = []
    for(let i=0;i<maxGridLen*maxGridHight;i++){
        if(Math.floor(Math.random() * 4)===3){
            createCell(column,row,'alive')
        }else{
            createCell(column,row,'dead')
        }
        fullgrid.push(`${column}-${row}`)
        column ++
        if(column===maxGridLen){
            row ++
            column = 0
        }
    }
    cellsList = fullgrid
}