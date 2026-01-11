
let stock = []
let buyList = []
const stockContainer = document.querySelector("#stockContainer")
const buyListContainer = document.querySelector("#buyListContainer")
let item = function(name, much, min){
    this.name = name;
    this.much = much;
    this.min = min;
}
function createItem(name, much, min){
    newItem = new item(name, much, min)
    stock.push(newItem)
    updateStock()
}
function getInfo(){
    let name = document.querySelector("#nameInput").value;
    let much = Number(document.querySelector("#quantityInput").value);
    let min = Number(document.querySelector("#minimumInput").value);
    if ((!name || !much || !min) || (isNaN(much) || isNaN(min))) {
        return alert("Preencha os campos corretamente")
    }
    createItem(name, much, min)
    checkForBuyList()
}
function updateStock(){
    stockContainer.innerHTML = ""
    for (let i=0;i<stock.length;i++){
        let newElement = document.createElement("li")
        newElement.innerHTML = `Nome:${stock[i].name} <br> Quantidade:${stock[i].much} <br> Minimo:${stock[i].min}
        `
        stockContainer.appendChild(newElement)
    }
}
function checkForBuyList(){
    buyList = []
    for (let i=0;i<stock.length;i++){
        if (stock[i].much <= stock[i].min) {
            buyList.push(stock[i])
            addToBuyList()
        }
    }
    
}
function addToBuyList(){
    buyListContainer.innerHTML = "<ul></ul>"
    for (let i = 0; i < buyList.length; i++){
        let newElement = document.createElement("li")
        newElement.innerHTML = `Nome:${stock[i].name} <br> Falta:${stock[i].min - stock[i].much}
        `
        buyListContainer.appendChild(newElement)
    }
}