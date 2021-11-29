var url = window.location.search;
var urlParametro = new URLSearchParams(url);
var nomeProduto = urlParametro.get('produto');

criarDivImg = (Produto) => {
    var x = document.getElementsByClassName('img-prd')
    var divImg = document.createElement('img')
    divImg.setAttribute('id',Produto)
    divImg.setAttribute('class','hidden')
    divImg.src = "http://localhost:3000/imagens/" + Produto +'.png'
    x[0].appendChild(divImg)
}

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

mostrarProdutoNaTela = (dados, produto) => {
    document.getElementById('nome').innerHTML = dados[0].nome
    document.getElementById('preco').innerHTML = dados[0].preco
    document.getElementById('desc').innerHTML = dados[0].desc
    var imgPrd = document.getElementById(produto);
    imgPrd.classList.remove("hidden");
}

async function buscarEmostrarProduto(produto) {
    const url = "http://localhost:3000/" + produto
    const promessa = await fetch(url)
    const dados = await promessa.json()
    const preco = dados[0].preco
    const desc = dados[0].desc
    mostrarProdutoNaTela(dados, produto)
}
