var nomeCantina = "Cantina da Escola";
let salgados = 20;
const precoSalgado = 5;
let totalVendido = 0;

document.getElementById("nome-cantina").textContent = nomeCantina;
document.getElementById("quantidade-salgados").textContent =
  "Temos " + salgados + " salgados disponíveis.";
document.getElementById("preco-salgado").textContent =
  "Cada salgado custa R$" + precoSalgado;

document.getElementById("vender").addEventListener("click", function () {
  if (salgados >= 5) {
    salgados -= 5;
    totalVendido += 5 * precoSalgado;

    document.getElementById("quantidade-salgados").textContent =
      "Temos " + salgados + " salgados disponíveis.";
    document.getElementById("total-vendido").textContent =
      "A cantina vendeu R$" + totalVendido;
  } else {
    alert("Não há salgados suficientes!");
  }
});
