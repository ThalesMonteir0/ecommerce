//for nisso aqui

mostrarProdutoNaTela = (dados,nomeProduto) => { 
    for(let i = 1; i < 4; i++){
        document.getElementById('nome-'+nomeProduto+[i]).innerHTML = dados[0].nome
        document.getElementById('preco-'+nomeProduto+[i]).innerHTML = dados[0].preco
    }
}
criarDivPrd = (nomeProduto,num,nomeUrl) => {
    var divPrd = document.getElementsByClassName('produto')
    var divNomePrd = document.createElement('div')
    divNomePrd.setAttribute('id', 'nome-'+nomeProduto)
    divNomePrd.setAttribute('class','nome-produto')
    divPrd[num].appendChild(divNomePrd)

    var img = document.createElement('img')
    img.setAttribute('class','img')
    img.src = "http://localhost:3000/imagens/" +nomeProduto + ".png"
    divPrd[num].appendChild(img)

    var divPrecoPrd = document.createElement('div')
    divPrecoPrd.setAttribute('class','preco-produto')
    divPrecoPrd.setAttribute('id','preco-'+nomeProduto)
    divPrd[num].appendChild(divPrecoPrd)

    var elementoA = document.createElement('a')
    elementoA.setAttribute('class',nomeProduto)
    elementoA.setAttribute('href', '../ecommerce-master/Mostrar-Produto.html?produto='+nomeUrl)
    elementoA.innerText = 'comprar'
    divPrd[num].appendChild(elementoA)
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
    console.log(dados);
    criarDivPrd('produto1','0','bola')
    criarDivPrd('produto2','1','camisetawarriors')
    criarDivPrd('produto3','2','camisetalakers')
    mostrarProdutoNaTela(dados,'produto')  
}

buscarEmostrarProduto();