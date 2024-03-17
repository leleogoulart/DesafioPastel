document.getElementById('cadastrar_botao').addEventListener('click', function() {

    var pedido = document.getElementById('pedido').value;
    var sabor = document.getElementById('sabor').value;
    var valor = document.getElementById('valor').value;
    var descricao = document.getElementById('descricao').value;
    var imagem = document.getElementById('imagemInput').files[0]; 
    var novoItem = document.createElement('li');
    novoItem.textContent = `pedido: ${pedido}, sabor: ${sabor}, valor: ${preco}, descricao: ${descricao}`;

    if (imagem) {
        var img = document.createElement('img');
        img.src = URL.createObjectURL(imagem);
        novoItem.appendChild(img);
    }

    var listaPedidos = document.getElementById('lista');
    listaPedidos.insertBefore(novoItem, listaPedidos.firstChild);
});

function cadastrar() {
    var input1 = document.getElementById('pedido').value;
    var input2 = document.getElementById('sabor').value;
    var input3 = document.getElementById('valor').value;

    var corSelecionada = document.getElementById('switch').checked ? 'amarelo' : 'vermelho';

    var imagem = document.createElement('img');
    imagem.src = corSelecionada === 'amarelo' ? 'images/images.png' : 'images/pasteis-img.png';
    imagem.alt = corSelecionada === 'amarelo' ? 'Imagem A' : 'Imagem B';
    imagem.width = 100;

    var paragrafo = document.createElement('p');
    paragrafo.textContent = 'pedido: ' + input1 + ', sabor: ' + input2 + ', valor: ' + input3;

    var resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    resultado.appendChild(paragrafo);
    resultado.appendChild(imagem);
}

document.getElementById('cadastrar_botao').addEventListener('click', cadastrar);
