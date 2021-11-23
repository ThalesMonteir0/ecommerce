
mostrarProdutoNaTela = (dados,nome1,nome2,nome3) => { 
    document.getElementById('nome-'+nome1).innerHTML = dados[0].nome
    document.getElementById('preco-'+nome1).innerHTML = dados[0].preco
    document.getElementById('nome-'+nome2).innerHTML = dados[0].nome1
    document.getElementById('preco-'+nome2).innerHTML = dados[0].preco1
    document.getElementById('nome-'+nome3).innerHTML = dados[0].nome2
    document.getElementById('preco-'+nome3).innerHTML = dados[0].preco2
}
criarDivPrd = (parametro,num,nome) => {
    var x = document.getElementsByClassName('produto')
    var divNomePrd = document.createElement('div')
    divNomePrd.setAttribute('id', 'nome-'+parametro)
    divNomePrd.setAttribute('class','nome-produto')
    x[num].appendChild(divNomePrd)

    var y = document.getElementsByClassName('img-produto')
    var img = document.createElement('img')
    img.setAttribute('class','img')
    img.src = "http://localhost:3000/imagens/" +parametro + ".png"
    y[num].appendChild(img)

    var divPrecoPrd = document.createElement('div')
    divPrecoPrd.setAttribute('class','preco-produto')
    divPrecoPrd.setAttribute('id','preco-'+parametro)
    x[num].appendChild(divPrecoPrd)

    var elementoA = document.createElement('a')
    elementoA.setAttribute('class',parametro)
    elementoA.setAttribute('href', '../ecommerce-master/Mostrar-Produto.html?produto='+nome)
    elementoA.innerText = 'comprar'
    x[num].appendChild(elementoA)
    console.log(elementoA);
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
    criarDivPrd('produto1','0','bola')
    criarDivPrd('produto2','1','camisetawarriors')
    criarDivPrd('produto3','2','camisetalakers')
    mostrarProdutoNaTela(dados,'produto1','produto2','produto3')
    
}

buscarEmostrarProduto();
