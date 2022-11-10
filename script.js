let creator = prompt("Oi! Qual o seu nome?")
while (creator === ""){
    creator = prompt("Oi! Qual o seu nome?")
    console.log("lol")
}
let button = document.querySelector("button")
let shirtModel, necklineModel ,fabricType = 0
let fabric = ""
let tShirt = ""
let imageUrl = ""
let contador = 0
let requiredSelection = false
let tShirtInfo = {
    "model": "t-shirt" | "long" | "top-tank",
    "neck": "v-neck" | "round" | "polo",
    "material": "silk" | "cotton" | "polyester",
    "image": imageUrl,
    "owner": creator,
    "author": creator
}

let validUrl = ""



function contar(a, b, c){
    contador = a + b + c
    if(contador === 3){
        requiredSelection = true
        allDone ()
    }
}

function getUrl(url){
    if(url.includes("http")){
        tShirtInfo.image = url
        allDone()
        console.log(tShirtInfo)
    } else {
        let inputURL = document.querySelector(".urlInput").value
        inputURL = ""
        alert("Por favor, insira uma url de imagem válida")


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
    tShirtInfo.model = element.id 
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
    tShirtInfo.neck = element.id 
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
    tShirtInfo.material = element.id
    fabricType = 1
    contar(shirtModel, necklineModel, fabricType)
    
}

 function allDone(){
    if(requiredSelection === true && tShirtInfo.image.length > 8){
    console.log("olarrr")
    button.classList.add("blue")
    }
    
} 

const post = () => {
    axios.post("https://mock-api.driven.com.br/api/v4/shirts-api/shirts", tShirtInfo)
    .then((response)=>{
        console.log(response.status)
        alert("Sua encomenda foi confirmada!")
    })
    .catch(error =>{
        console.log(error.response.status)
        alert("Ops, não conseguimos processar sua encomenda")
    })
}



/* function checkUrl(url) {
    
    try {
     let endereco = new URL(url)
     const button = document.querySelector("button")
     button.classList.add("blue")
     button.disabled = false
   } catch(err) {
       alert("url de imagem invalida")
       button.disabled = true
   }
 } */