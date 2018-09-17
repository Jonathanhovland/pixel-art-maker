var width = document.querySelector(".columns")
var height = document.querySelector(".rows")
var paint = document.querySelector("#paint")
var button = document.querySelector(".button")
var canvas = document.querySelector("#canvas")
var grid = document.querySelector("#createGrid")
var reset = document.querySelector(".reset")
var hasCanvas = false


grid.onsubmit = function(event){
    event.preventDefault()

    var canvasTwo = document.createElement("table")
    canvasTwo.classList.add("canvasTwo")
    canvas.appendChild(canvasTwo)


    if (hasCanvas === true) {
        canvas.removeChild(canvasTwo)
    }

    for(let r = 0;r < height.value;r++){
        var row  = canvasTwo.insertRow(r)
        for(let c = 0;c < width.value;c++){
            var cell = row.insertCell(c)
            cell.className = "pixel"
            cell.addEventListener("click", fillCell)
        }
    }
    hasCanvas = true
}


function fillCell() {
    this.setAttribute("style", `background-color: ${paint.value}`)
}

