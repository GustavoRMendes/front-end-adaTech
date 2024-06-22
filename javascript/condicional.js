// Condicionais

// Operadores Booleanos: Comparações
const numero1 = 10;
const numero2 = 12;
console.log(numero1 === numero2);
console.log(numero1 == numero2);
console.log(numero1 == "10");

const idadePessoa1 = 20;
const idadePessoa2 = 30;
console.log(idadePessoa1 >= 18 && idadePessoa2 >= 18);
console.log(idadePessoa1 >= 18 || idadePessoa2 >= 18);

// if
if (true) {
  console.log("Condição");
}

// if else
if (false) {
  console.log("Condição");
} else {
  console.log("Condição 2");
}

// if else if
if (true) {
  console.log("Condição");
} else if (false) {
  console.log("Condição 2");
} else {
  console.log("Condição 3");
}
const nota1 = 70;
const nota2 = 80;
const media = (nota1 + nota2) / 2;

if (media >= 90) {
  console.log("Aluno aprovado com nota A!");
} else if (media >= 80) {
  console.log("Aluno aprovado com nota B!");
} else if (media >= 70) {
  console.log("Aluno aprovado com nota C!");
} else {
  console.log("Aluno reprovado!");
}
// ternário
const idade = 19;
const verificacao = idade > 18 ? "Maior" : "Menor";
console.log(verificacao);

// switch
const dia = "segunda-feira";
switch (dia) {
  case "segunda-feira":
    console.log("Segunda-feira!");
    break;
  case "terça-feira":
    console.log("Terça-feira!");
    break;
  case "quarta-feira":
    console.log("Quarta-feira!");
    break;
  default:
    console.log("Outro dia da semana!");
}
