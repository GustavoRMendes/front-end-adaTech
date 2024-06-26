// Estruturas de Repetição

// // While
// let saldo = Number(prompt("Qual o valor do seu saldo? "));

// while (saldo < 0) {
//   saldo = Number(prompt("Seu saldo não pode ser negativo. Tente novamente:"));
// }
// alert("Seu saldo é " + saldo);

// // Do While
// let numero = 10;

// do {
//   numero += 1;
//   alert(numero);
// } while (numero < 15);

do {
  let opcao = Number(
    prompt(`
    Escolha uma das opções inserindo o número de acordo com a opção desejada.
    1 - Mostrar meu nome.
    2 - Mostrar meu sobrenome.
    3 - Mostrar minha idade.
    4 - Mostrar minha profissão.
    5 - Sair do programa.
  `)
  );
  switch (opcao) {
    case 1:
      const nome = prompt("Qual seu nome? ");
      alert("Seu nome é " + nome);
      break;
    case 2:
      const sobrenome = prompt("Qual seu sobrenome?");
      alert("Seu sobrenome é " + sobrenome);
      break;
    case 3:
      const idade = Number(prompt("Qual a sua idade?"));
      alert("Sua idade é " + idade);
      break;
    case 4:
      const profissao = prompt("Qual sua profissão?");
      alert("Sua profissão é " + profissao);
      break;
    case 5:
      alert("Saindo...");
      break;
    default:
      alert("ERRO. Insira um número corretamente");
  }
} while (opcao !== 5);
