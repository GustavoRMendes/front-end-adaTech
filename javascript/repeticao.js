// Estruturas de Repetição

// While
let saldo = Number(prompt("Qual o valor do seu saldo? "));

while (saldo < 0) {
  saldo = Number(prompt("Seu saldo não pode ser negativo. Tente novamente:"));
}
alert("Seu saldo é " + saldo);
// Do While
let numero = 10;

do {
  numero += 1;
  alert(numero);
} while (numero < 15);
