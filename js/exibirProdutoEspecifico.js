criarDivImg = (nomeProduto) => {
    var x = document.getElementsByClassName('img-prd')
    var divImg = document.createElement('img')
    divImg.setAttribute('id',nomeProduto)
    divImg.setAttribute('class','hidden')
    divImg.src = "http://localhost:3000/imagens/" + nomeProduto +'.png'
    x[0].appendChild(divImg)
}

var url = window.location.search;
var urlParametro = new URLSearchParams(url);
var nomeProduto = urlParametro.get('produto');


if(nomeProduto == "bola"){
    buscarEmostrarProduto('produto1')
    criarDivImg('produto1')
}
if(nomeProduto == "camisetawarriors"){
    buscarEmostrarProduto('produto2')
    criarDivImg('produto2')
}
if(nomeProduto == "camisetalakers"){
    buscarEmostrarProduto('produto3')
    criarDivImg('produto3')
}

mostrarProdutoNaTela = (dados, nomeProduto) => {
    document.getElementById('nome').innerHTML = dados[0].nome
    document.getElementById('preco').innerHTML = dados[0].preco
    document.getElementById('desc').innerHTML = dados[0].desc
    var imgBola = document.getElementById(nomeProduto);
    imgBola.classList.remove("hidden");
}

async function buscarEmostrarProduto(nomeProduto) {
    const url = "http://localhost:3000/" + nomeProduto
    const promessa = await fetch(url)
    const dados = await promessa.json()
    const preco = dados[0].preco
    const desc = dados[0].desc
    mostrarProdutoNaTela(dados, nomeProduto)
}



