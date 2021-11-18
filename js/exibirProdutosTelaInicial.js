var url_pedido = 'file:///C:/Users/ravtec/Desktop/ecommerce-master/Mostrar-Produto.html?produto=bola';
document.querySelector('.comprar1').href = url_pedido;
var url_pedido2 = 'file:///C:/Users/ravtec/Desktop/ecommerce-master/Mostrar-Produto.html?produto=camisetawarriors';
document.querySelector('.comprar2').href = url_pedido2;
var url_pedido3 = 'file:///C:/Users/ravtec/Desktop/ecommerce-master/Mostrar-Produto.html?produto=camisetalakers';
document.querySelector('.comprar3').href = url_pedido3;


mostrarProdutoNaTela = (dados, img) => { 
    document.getElementById('nome-produto').innerHTML = dados[0].nome
    document.getElementById('preco-produto').innerHTML = dados[0].preco
    document.getElementById('nome-produto2').innerHTML = dados[0].nome1
    document.getElementById('preco-produto2').innerHTML = dados[0].preco1
    document.getElementById('nome-produto3').innerHTML = dados[0].nome2
    document.getElementById('preco-produto3').innerHTML = dados[0].preco2
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
}

buscarEmostrarProduto();
