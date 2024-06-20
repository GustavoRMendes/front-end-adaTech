// Condicionais

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
