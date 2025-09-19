// Variáveis principais
var nomeCantina = "Cantina da Escola";
let salgados = 20;
const precoSalgado = 5;
let totalVendido = 0;

// Mostrar informações iniciais no layout
document.getElementById("nome-cantina").textContent = nomeCantina;
document.getElementById("quantidade-salgados").textContent =
  "Temos " + salgados + " salgados disponíveis.";
document.getElementById("preco-salgado").textContent =
  "Cada salgado custa R$" + precoSalgado;

// Função de vender 5 salgados
document.getElementById("vender").addEventListener("click", function () {
  if (salgados >= 5) {
    salgados -= 5;
    totalVendido += 5 * precoSalgado;

    // Atualizar no HTML
    document.getElementById("quantidade-salgados").textContent =
      "Temos " + salgados + " salgados disponíveis.";
    document.getElementById("total-vendido").textContent =
      "A cantina vendeu R$" + totalVendido;
  } else {
    alert("Não há salgados suficientes!");
  }
});
