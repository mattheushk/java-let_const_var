// --- Passo 1: Declarando variáveis ---

// 'var' para o nome da cantina (escopo global)
var nomeCantina = "Cantina da Escola";
console.log("Bem-vindo à " + nomeCantina);

// 'let' para a quantidade de salgados (pode mudar)
let salgados = 20;
console.log("Temos " + salgados + " salgados disponíveis.");

// 'const' para o preço fixo de cada salgado (não pode mudar)
const precoSalgado = 5;
console.log("Cada salgado custa R$" + precoSalgado);


// --- Passo 2: Atualizando valores ---

// Subtrai 5 salgados
salgados = salgados - 5; 

// Calcula o total vendido
let totalVendido = 5 * precoSalgado; 

console.log("Agora restam " + salgados + " salgados.");
console.log("A cantina vendeu R$" + totalVendido);


// --- Passo 3: Teste rápido (Escopo) ---

// O que acontece se tentar mudar o valor de precoSalgado?
// precoSalgado = 6; // Se você descomentar esta linha, vai dar um erro, pois 'const' não pode ser reatribuída.

// O que acontece se criar outra variável com var e let dentro de um bloco?
if (true) {
    var testeVar = "Sou var";  
    let testeLet = "Sou let";  
    console.log(testeVar); // Funciona
    console.log(testeLet); // Funciona
}

console.log(testeVar); // Funciona, pois 'var' ignora o escopo do bloco.
// console.log(testeLet); // Se você descomentar esta linha, vai dar um ERRO, pois 'let' respeita o escopo do bloco.