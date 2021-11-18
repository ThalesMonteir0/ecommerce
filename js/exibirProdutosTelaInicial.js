var url_pedido = 'file:///C:/Users/ravtec/Desktop/ecommerce-master/Mostrar-Produto.html?produto=bola';
document.querySelector('.comprar1').href = url_pedido;
var url_pedido2 = 'file:///C:/Users/ravtec/Desktop/ecommerce-master/Mostrar-Produto.html?produto=camisetawarriors';
document.querySelector('.comprar2').href = url_pedido2;
var url_pedido3 = 'file:///C:/Users/ravtec/Desktop/ecommerce-master/Mostrar-Produto.html?produto=camisetalakers';
document.querySelector('.comprar3').href = url_pedido3;


mostrarProdutoNaTela = (dados) => { 
    document.getElementById('nome-produto').innerHTML = dados[0].nome
    document.getElementById('preco-produto').innerHTML = dados[0].preco
    document.getElementById('nome-produto2').innerHTML = dados[0].nome1
    document.getElementById('preco-produto2').innerHTML = dados[0].preco1
    document.getElementById('nome-produto3').innerHTML = dados[0].nome2
    document.getElementById('preco-produto3').innerHTML = dados[0].preco2
}
criarDivPrd = () => {
    var x = document.getElementsByClassName('produto')
    var divNomePrd = document.createElement('div')
    divNomePrd.setAttribute('class',parametro)
    divNomePrd.setAttribute('id','sla')
    x[0].appendChild(divNomePrd)

    var y = document.getElementsByClassName('img-produto')
    var img = document.createElement('img')
    img.setAttribute('class','img')
    img.src = "http://localhost:3000/imagens/" +parametro + ".png"
    y[0].appendChild(img)

    var divPrecoPrd = document.createElement('div')
    divPrecoPrd.setAttribute('class','preco-produto')
    divPrecoPrd.setAttribute('id',parametro)
    x[0].appendChild(divPrecoPrd)

    var elementoA = document.createElement('a')
    elementoA.setAttribute('class',parametro)
    elementoA.href = ""
}

async function buscarEmostrarProduto() {
    const url = "http://localhost:3000/"
    const promessa = await fetch(url)
    const dados = await promessa.json()
    const preco = dados[0].preco
    const nome1 = dados[0].nome1
    const preco1 = dados[0].preco1
    const nome2 = dados[0].nome2
    const preco2 = dados[0].preco2
    mostrarProdutoNaTela(dados)
    criarDivPrd()
}

buscarEmostrarProduto();
