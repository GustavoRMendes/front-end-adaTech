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
const numeros2 = [-1, 2, 3, 4, 5, 6, 7];
const retorno = numeros2.some((numero) => numero > 0);
console.log(retorno);

// map, filter and reduce
const listaDeNumeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const dobro = listaDeNumeros.map((numero) => {
  return numero * 2;
});
const triplo = listaDeNumeros.map((numero) => {
  return numero * 3;
});
console.log(dobro);
console.log(triplo);

const resultado = listaDeNumeros.filter((numero) => {
  return numero > 80;
});
console.log(resultado);

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10
