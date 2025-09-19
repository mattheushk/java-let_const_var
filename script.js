// --- Passo 1: Declarando variáveis ---

// 'var' é usado para o nome da cantina. Ele tem um escopo mais amplo (global ou de função).
// Embora ainda funcione, 'let' ou 'const' são mais recomendados em projetos modernos.
var nomeCantina = "Cantina da Escola";
console.log("Bem-vindo à " + nomeCantina);

// 'let' é usado para a quantidade de salgados porque esse valor vai mudar.
// Ele respeita o escopo de bloco, sendo uma opção mais segura que 'var'.
let salgados = 20;
console.log("Temos " + salgados + " salgados disponíveis.");

// 'const' é usado para o preço, pois ele é um valor fixo que não deve ser alterado.
// Tentar mudar uma 'const' causará um erro.
const precoSalgado = 5;
console.log("Cada salgado custa R$" + precoSalgado);

// --- Passo 2: Atualizando valores ---

// O número de salgados é atualizado subtraindo 5 do valor inicial.
salgados = salgados - 5; 

// Uma nova variável, 'totalVendido', é criada com 'let' para calcular o valor total.
let totalVendido = 5 * precoSalgado; 

console.log("Agora restam " + salgados + " salgados.");
console.log("A cantina vendeu R$" + totalVendido);

// --- Passo 3: Teste rápido (Escopo) ---

// O que acontece se tentar mudar o valor de precoSalgado?
// descomente a linha abaixo para ver o erro no console:
// precoSalgado = 6; 

// O que acontece se criar outra variável com var e let dentro de um bloco?
if (true) {
    var testeVar = "Sou var";  
    let testeLet = "Sou let";  
    console.log(testeVar); // Funciona
    console.log(testeLet); // Funciona
}

// 'testeVar' é acessível fora do bloco 'if' porque 'var' tem escopo global.
console.log(testeVar); 

// 'testeLet' NÃO é acessível fora do bloco 'if' porque 'let' tem escopo de bloco.
// descomente a linha abaixo para ver o ERRO:
// console.log(testeLet);