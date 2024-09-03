document
  .getElementById("cadastroMedicamento")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // aqui pega os valores dos inputs do formulário
    const photoUrl = document.getElementById("photoUrl").value;
    const nomeMedicamento = document.getElementById("nomeMedicamento").value;
    const laboratorio = document.getElementById("laboratorio").value;
    const preco = document.getElementById("preco").value;

    const medicamento = {
      photoUrl,
      nomeMedicamento,
      laboratorio,
      preco,
    };

    let medicamentos = JSON.parse(localStorage.getItem("medicamentos")) || [];

    medicamentos.push(medicamento);

    localStorage.setItem("medicamentos", JSON.stringify(medicamentos));

    // CHAMA A FUNÇÃO PARA RENDERIZAR A LISTA
    renderizarListaDeMedicamentos();

    event.target.reset();
  });

// =================================== Função para renderizar a lista de medicamentos =====================================
function renderizarListaDeMedicamentos() {}
