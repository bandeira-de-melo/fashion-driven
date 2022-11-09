let craetor = prompt("Oi! Qual o seu nome?")
let shirtModel = 0
let necklineModel = 0
let fabricType = 0

function selectShirtModel(element) {
    const prevSelectedShirtItem = document.querySelector('.selected-shirt')
    if (prevSelectedShirtItem !== null) {
        prevSelectedShirtItem.classList.remove('selected-shirt');
        shirtModel = 0
    }
    const tShirt = element
    tShirt.classList.add("selected-shirt") 
}

function selectNecklineModel(element) {
    const prevSelectedNecklineItem = document.querySelector('.selected-neckline')
    if (prevSelectedNecklineItem !== null) {
        prevSelectedNecklineItem.classList.remove('selected-neckline');
        necklineModel = 0
    }
    const neckLine = element
    neckLine.classList.add("selected-neckline") 
}

function selectFabricModel(element) {
    const prevSelectedFabricItem = document.querySelector('.selected-fabric')
    if (prevSelectedFabricItem !== null) {
        prevSelectedFabricItem.classList.remove('selected-fabric');
        necklineModel = 0
    }
    const fabric = element
    fabric.classList.add("selected-fabric") 
}
/*
function allDone(){
    contador++
    const imageUrl = document.querySelector(".urlInput").value
    if(contador > 2 ){
        const button = document.querySelector(".btn")
        button.classList.add("green")
    }
}
*/