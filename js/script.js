

function adicionarMedicamento(event) {
    event.preventDefault(); // Evita o envio do formulário e a recarga da página

    // Obter valores dos campos do formulário
    const nomeMedicamento = document.getElementById('nomeMedicamento').value;
    const laboratorio = document.getElementById('laboratorio').value;
    const preco = document.getElementById('preco').value;
    const photoUrl = document.getElementById('photoUrl').value || 'placeholder.jpg';

    // Criar um novo elemento de lista (li) para o medicamento
    const productItem = document.createElement('li');
    productItem.className = 'product-item'; // Define a classe para estilização

    // Criar a div que conterá a imagem do produto
    const productImage = document.createElement('div');
    productImage.className = 'product-image'; // Define a classe para estilização

    // Criar o elemento de imagem
    const img = document.createElement('img');
    img.src = photoUrl; // Usa o URL fornecido pelo usuário
    img.alt = `Imagem de ${nomeMedicamento}`; // Define o texto alternativo da imagem

    // Adicionar a imagem à div productImage
    productImage.appendChild(img);

    // Criar a div que conterá as informações do produto
    const productInfo = document.createElement('div');
    productInfo.className = 'product-info'; // Define a classe para estilização

    // Criar o elemento para o nome do medicamento
    const productName = document.createElement('h2');
    productName.className = 'product-name'; // Define a classe para estilização
    productName.textContent = nomeMedicamento; // Define o texto do nome do medicamento

    // Criar o elemento para o nome do laboratório
    const productLab = document.createElement('p');
    productLab.className = 'product-lab'; // Define a classe para estilização
    productLab.textContent = laboratorio; // Define o texto do nome do laboratório

    // Criar o elemento para o preço do medicamento
    const productPrice = document.createElement('p');
    productPrice.className = 'product-price'; // Define a classe para estilização
    productPrice.textContent = `R$ ${parseFloat(preco).toFixed(2)}`; // Formata o preço e define o texto

    // Adicionar os elementos de nome, laboratório e preço à div productInfo
    productInfo.appendChild(productName);
    productInfo.appendChild(productLab);
    productInfo.appendChild(productPrice);

    // Adicionar as divs de imagem e informações ao item de lista (productItem)
    productItem.appendChild(productImage);
    productItem.appendChild(productInfo);

    // Adicionar o novo item de lista à lista de produtos (ul)
    const productList = document.getElementById('product-list');
    productList.appendChild(productItem);

    // Limpar os campos do formulário após o cadastro
    document.getElementById('cadastroMedicamento').reset();
}