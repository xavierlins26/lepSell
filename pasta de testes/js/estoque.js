// Lista de produtos (vazia)
let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
let promocode = JSON.parse(localStorage.getItem("promocoes")) || [];

// *Adicionar produtos a lista (local: resgistrop.html)* 
 function adicionarProdutos () {

    const nome = document.querySelector("#nome").value;
    const preco = Number(document.querySelector("#preco").value);
    const estoque = Number(document.querySelector("#estoque").value);
    const descricao = document.querySelector("#descricao").value; 
    const promocaoCriada = document.querySelector("#codigo").value;
    promocode.push(promocaoCriada)
    let categoriaSelecionada = document.querySelectorAll("#ctgr");
    let escolha = document.getElementById("#categoriaSelecionada");
    categoriaSelecionada.forEach(function(radio) {
      radio.addEventListener("change", function() {
        escolha.textContent = this.value;
      });
    });
    const categorias = categoriaSelecionada
      ? categoriaSelecionada.value
      : "Sem categoria";

  // automação de criação de id

    let maiorId = produtos.length > 0 
        ? Math.max(...produtos.map(p => p.id)) 
        : 0;

    // automação de adicionar a lista
    let novoProduto = {
        id: maiorId + 1,
        nome,
        preco,
        estoque,
        descricao,
        categorias
    }
    // puxa os novos produtos adicionados para a lista
    produtos.push(novoProduto);

    // banco de dados totalmente temporario
    localStorage.setItem("produtos", JSON.stringify(produtos));
    localStorage.setItem("promocoes", JSON.stringify(promocode));
}

// Adicionar um novo campo de registro 
    const checkboxPromocao = document.querySelector("#promocao");
    const campoCodigo = document.querySelector("#campo-codigo");

    if (checkboxPromocao) {
        checkboxPromocao.addEventListener("change", function() {

            if (checkboxPromocao.checked) {
                campoCodigo.style.display = "block";
            } else {
                campoCodigo.style.display = "none";
            }

        });
    }

// *Cards de produtos (local: estoque.html)*
const container = document.getElementById("lista_produtos");

// Cards por cada produto adicionado
if(container){

  produtos.forEach(produto => {
      const card = document.createElement("div");
      card.classList.add("card");
  
      card.innerHTML = `
            <ul class="name-content">
              <li> <h2>${produto.nome}</h2> </li>
              <li> <p>ID: ${produto.id}</p> </li>
            </ul>
          <p class="card-content">
          R$ ${produto.preco.toFixed(2)}
          </p>
  
          <p><strong>Categoria:</strong> ${produto.categorias}</p>
  
          <p><strong>Descrição:</strong> ${produto.descricao}</p>
  
          <input type="text" class="code" placeholder="Ex: PROMO10"> 
          <buttom class="confirmar"> Confirmar </buttom>
          <p class="resultado"></p>
  
          <div class="quantidade">
              <label>Estoque:</label>
              <span class="caixa">${produto.estoque}</span>
          </div>
      `;

    const input = card.querySelector(".code");
    const botao =card.querySelector(".confirmar");
    const resultado = card.querySelector(".resultado");

    botao.addEventListener("click", () => {
      const codigoDigitado = input.value;
      
      if(promocode.includes(codigoDigitado)){
        resultado.textContent = "✅ Código Promocional válido!";
      }else{
        resultado.textContent = "❌ Código promocional inválido!";
      }
    });

      container.appendChild(card);
  });
}

const formulario = document.querySelector(".formulario");

if (formulario) {
    formulario.addEventListener("submit", function(event) { 

        event.preventDefault(); // Impede recarregar a página, mantendo o localstorage

        adicionarProdutos();
    });
}




//================================
// SALVAR NO "BANCO"
// ===============================
function salvarProdutos() {
    localStorage.setItem("produtos", JSON.stringify(produtos));
}
