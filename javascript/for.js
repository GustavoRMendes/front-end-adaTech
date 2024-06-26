// for
let cont;
for (cont = 0; cont <= 10; cont++) {
  console.log(cont);
}
// * Arrays
const notas = [8, 10, 7];
notas[2] = 9;
for (cont = 0; cont < notas.length; cont++) {
  console.log(notas[cont]);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 5];
console.log(numeros.slice(0, 4));
console.log(numeros.push(8));
console.log(numeros.unshift(0));
console.log(numeros);

numeros.pop();
numeros.shift();
console.log(numeros);
console.log(numeros.includes(8)); // false
console.log(numeros.indexOf(3)); // 2
console.log(numeros.lastIndexOf(5)); // 7
