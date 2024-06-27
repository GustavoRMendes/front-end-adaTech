// Array.prototype.every()
const numeros = [20, 30, 50, 40];
const todosPositivos = numeros.every((elemento) => elemento > 0);
console.log(todosPositivos);
const carros = [
  {
    id: "1",
    marca: "Ferrari",
    ano: 2024,
  },
  {
    id: "2",
    marca: "Ford",
    ano: 2024,
  },
];
const ano2024 = carros.every((carro) => carro.ano === 2024);
console.log(ano2024);
// some
