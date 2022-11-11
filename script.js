let creator = prompt("Oi! Qual o seu nome?")
while (creator === ""){
    creator = prompt("Oi! Qual o seu nome?")
}

//Global variables
let button = document.querySelector("button")
const latestItemsContainer = document.querySelector(".latest-items-container")
let shirtModel, necklineModel ,fabricType = 0
let fabric, tShirt , imageUrl = ""
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

//Request functions
const get = ()=>{
    axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts")
    .then(response => {
        latestItemsContainer.innerHTML = ""
        let allTshirts = response.data
        let tenLastTshirts = allTshirts.slice(-10)
        
        tenLastTshirts.map(item => {
            latestItemsContainer.innerHTML += `
            <div class="latest-item-box" onclick="confirmation(this)">
            <div class="item hide">${item.model}</div>
            <div class="item hide">${item.neck}</div>
            <div class="item hide">${item.material}</div> 
            <div class="item hide">${item.image}</div>
            <div class="item hide">${item.owner}</div>
                <div class="image-latest-item-container">
                    <img src="/images/Blusa1.png" alt="" class="image-latest-item">
                    <img src="${item.image}" alt="" class="image-latest-item-print">
                </div>
                <strong>Criador: <span class="item-creator">${item.owner}</span></strong>
            </div>
            `
            })
        })
        .catch(error =>{
        console.log(error.response.status)
        })
    }

get()

const post = () => {
    axios.post("https://mock-api.driven.com.br/api/v4/shirts-api/shirts", tShirtInfo)
    .then((response)=>{
        console.log(response.status)
        get()
        alert("Sua encomenda foi confirmada!")
    })
    .catch(error =>{
        console.log(error.response.status)
        alert("Ops, não conseguimos processar sua encomenda")
    })
}

//End Request functions


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

// Selection Functions
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

//End Selection Functions

 function allDone(){
    if(requiredSelection === true && tShirtInfo.image.length > 8){
    button.classList.add("blue")
    }
    
} 


let confirmation = (element) => {
let itemData = element.children

 let confirmMessage = `
    model: ${itemData[0].innerHTML}\n
    neck: "${itemData[1].innerHTML}"\n
    material : ${itemData[2].innerHTML}\n
    image : ${itemData[3].innerHTML}\n
    owner : ${itemData[4].innerHTML}
   `
   let yes = confirm("Confirmar pedido")
   if(yes){
    alert(confirmMessage)
    location.reload()
   } else {
    location.reload()
   }

    
}



