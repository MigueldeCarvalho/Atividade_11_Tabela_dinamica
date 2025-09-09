document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
  
    let tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    let novaLinha = tabela.insertRow();
  
    let celula1 = novaLinha.insertCell(0);
    let celula2 = novaLinha.insertCell(1);
    let celula3 = novaLinha.insertCell(2);
  
    celula1.textContent = nome;
    celula2.textContent = email;
    celula3.innerHTML = `
      <button class="editar">Editar</button>
      <button class="excluir">Excluir</button>
    `;
  
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
  
    celula3.querySelector(".excluir").addEventListener("click", function() {
      tabela.deleteRow(novaLinha.rowIndex - 1);
    });
  
    celula3.querySelector(".editar").addEventListener("click", function() {
      document.getElementById("campo1").value = celula1.textContent;
      document.getElementById("campo2").value = celula2.textContent;
      tabela.deleteRow(novaLinha.rowIndex - 1);
    });
  });