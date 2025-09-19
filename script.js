// Passo 1 - Declarando variáveis
var nomeCantina = "Cantina da Escola";
let salgados = 20;
const precoSalgado = 5;

// Exibindo as informações iniciais no console
console.log("Bem-vindo à " + nomeCantina);
console.log("Temos " + salgados + " salgados disponíveis.");
console.log("Cada salgado custa R$" + precoSalgado);

// Passo 2 - Atualizando valores
let totalVendido = 0; // Para armazenar o valor total vendido

// Função que será chamada ao clicar no botão "Vender 5 Salgados"
document.getElementById('vender').addEventListener('click', function() {
  if (salgados >= 5) {
    // Atualizando o número de salgados
    salgados -= 5;

    // Calculando o valor vendido
    totalVendido += 5 * precoSalgado;

    // Atualizando a tela com os novos valores
    document.getElementById('quantidade-salgados').innerText = "Agora restam " + salgados + " salgados.";
    document.getElementById('total-vendido').innerText = "A cantina vendeu R$" + totalVendido;

    console.log("Agora restam " + salgados + " salgados.");
    console.log("A cantina vendeu R$" + totalVendido);
  } else {
    alert("Não há salgados suficientes para vender!");
  }
});

// Passo 3 - Teste rápido
// O código abaixo vai gerar um erro ao tentar alterar a constante precoSalgado
try {
  precoSalgado = 6; // Teste e veja o erro
} catch (e) {
  console.error("Erro ao tentar mudar o preço do salgado:", e);
}

// Exemplo com var e let dentro de um bloco
if (true) {
  var testeVar = "Sou var"; 
  let testeLet = "Sou let"; 
  console.log(testeVar); // funciona 
  console.log(testeLet); // funciona
} 

console.log(testeVar); // funciona
console.log(testeLet); // ERRO
