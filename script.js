let craetor = prompt("Oi! Qual o seu nome?")
let shirtModel = 0
let necklineModel = 0
let fabricType = 0
let fabric = ""
let tShirt = ""
let neckLine = ""
let contador = 0

function contar(a, b, c){
    contador = a + b + c
    if(contador > 2){
        allDone()
    }
}


function selectShirtModel(element) {
    const prevSelectedShirtItem = document.querySelector('.selected-shirt')
    if (prevSelectedShirtItem !== null) {
        prevSelectedShirtItem.classList.remove('selected-shirt');
        shirtModel = 0 
    }
    tShirt = element
    tShirt.classList.add("selected-shirt") 
    shirtModel = 1
    contar(shirtModel, necklineModel, fabricType)
}

function selectNecklineModel(element) {
    const prevSelectedNecklineItem = document.querySelector('.selected-neckline')
    if (prevSelectedNecklineItem !== null) {
        prevSelectedNecklineItem.classList.remove('selected-neckline');
        necklineModel = 0
    }
    neckLine = element
    neckLine.classList.add("selected-neckline")
    necklineModel = 1 
    contar(shirtModel, necklineModel, fabricType)
}

function selectFabricModel(element) {
    const prevSelectedFabricItem = document.querySelector('.selected-fabric')
    if (prevSelectedFabricItem !== null) {
        prevSelectedFabricItem.classList.remove('selected-fabric');
        fabricType = 0
    }
    fabric = element
    fabric.classList.add("selected-fabric")
    fabricType = 1
    contar(shirtModel, necklineModel, fabricType)
}

function allDone(){
    const imageUrl = document.querySelector(".urlInput").value
    console.log(imageUrl)
    const button = document.querySelector("button")
    button.classList.add("blue")
    
}



