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

// map
const listaDeNumeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const dobro = listaDeNumeros.map((numero) => {
  return numero * 2;
});
console.log(dobro);

const carro = [
  {
    id: 1,
    marca: "Ferrari",
    ano: 2024,
    preco: 2999,
    quantidade: 2,
  },
  {
    id: 2,
    marca: "Mercedes",
    ano: 2022,
    preco: 1999,
    quantidade: 3,
  },
  {
    id: 3,
    marca: "Porshe",
    ano: 2020,
    preco: 4999,
    quantidade: 1,
  },
];
const total = carro.map((item) => {
  return {
    ...item,
    total: item.preco * item.quantidade,
  };
});
console.log(total);

const pesoEAltura = [
  {
    id: 1,
    nome: "Gustavo",
    altura: 1.74,
    peso: 65,
  },
  {
    id: 2,
    nome: "Felipe",
    altura: 1.73,
    peso: 70,
  },
  {
    id: 3,
    nome: "Téo",
    altura: 1.8,
    peso: 73,
  },
];
const imc = pesoEAltura.map((item) => {
  return {
    ...item,
    imc: item.peso / (item.altura * item.altura),
  };
});
console.log(imc);

// filter
const numeross = [1, 2, 3, 4, 5, 6];
const resultadoNumeross = numeross.filter((numero) => numero < 6 && numero > 2);
const paresNumeross = numeross.filter((numero) => numero % 2 === 0);
console.log(paresNumeross);
console.log(resultadoNumeross);

const alunos = [
  { id: 1, nome: "Gustavo", nota: 80 },
  { id: 2, nome: "Felipe", nota: 95 },
  { id: 3, nome: "Téo", nota: 60 },
  { id: 4, nome: "Camilo", nota: 70 },
];
const alunosAprovados = alunos.filter((numero) => {
  return numero.nota > 69.9;
});
console.log(alunosAprovados);

const produtos = [
  { id: 1, tipo: "Comida", produto: "Hambúrguer", preco: 79.99 },
  { id: 2, tipo: "Bebida", produto: "Coca Cola", preco: 9.99 },
  { id: 3, tipo: "Bebida", produto: "Coca Cola Zero", preco: 8.99 },
  { id: 4, tipo: "Comida", produto: "Pipoca", preco: 15.99 },
  { id: 5, tipo: "Comida", produto: "Batata Frita", preco: 15.99 },
  { id: 6, tipo: "Bebida", produto: "Fanta", preco: 9.99 },
  { id: 7, tipo: "Comida", produto: "Esfirra", preco: 2.99 },
  { id: 8, tipo: "Comida", produto: "Chocolate", preco: 12.99 },
  { id: 9, tipo: "Bebida", produto: "Heineken", preco: 22.99 },
  { id: 10, tipo: "Bebida", produto: "Limonada", preco: 11.99 },
];
const filtroDeComida = produtos.filter((item) => item.tipo === "Comida");
const filtroDeBebida = produtos.filter((item) => item.tipo === "Bebida");
const filtroDeComidaBarata = produtos.filter(
  (item) => item.tipo === "Comida" && item.preco < 10
);
console.log(filtroDeBebida);
console.log(filtroDeComida);
console.log(filtroDeComidaBarata);

// reduce
const listaAleatoria = [5, 10, 15, 20, 25, 30];
const soma = listaAleatoria.reduce((acumulador, item) => {
  return acumulador + item;
}, 0);
const somaDosPares = listaAleatoria.reduce((acumulador, item) => {
  if (item % 2 === 0) {
    return item + acumulador;
  } else {
    return acumulador;
  }
}, 0);
console.log(somaDosPares);
console.log(soma);

const notasDoGustavo = [8, 9];
const mediaDoGustavo = notasDoGustavo.reduce(
  (acumulador, item, _, arrayCompleto) => {
    return item / arrayCompleto.length + acumulador;
  },
  0
);
console.log(mediaDoGustavo);

const carrinho = [
  { id: 1, tipo: "Camisa", preco: 20 },
  { id: 2, tipo: "Bermuda", preco: 30 },
  { id: 3, tipo: "Relógio", preco: 40 },
  { id: 4, tipo: "Casaco", preco: 50 },
  { id: 5, tipo: "Perfume", preco: 60 },
];
const totalDoCarrinho = carrinho.reduce((acumulador, item) => {
  return acumulador + item.preco;
}, 0);
console.log(totalDoCarrinho);
