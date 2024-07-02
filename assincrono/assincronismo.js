const fs = require("fs");

// * Callback
// console.log("Antes da função de ler o arquivo");
// fs.readFile("assincrono/arquivo.txt", (erro, conteudo) => {
//   if (erro) {
//     console.log("Ocorreu um erro");
//   } else {
//     console.log(String(conteudo));
//   }
// });
// console.log("Depois da função de ler o arquivo");

// setTimeout()
// console.log("Antes do setTimeout");
// setTimeout(() => {
//   console.log("Esse console.log vai ser executado após 2 segundos.");
// }, 2000);
// console.log("Depois do setTimeout");

// Promises
// const promessa = new Promise((resolve, reject) => {
//   fs.readFile("assincrono/arquivo.txt", (erro, conteudo) => {
//     if (erro) {
//       reject("Ocorreu um erro: " + erro);
//     } else {
//       resolve(String(conteudo));
//     }
//   });
// });

// promessa
//   .then((conteudoDoRetornoDaPromise) => {
//     console.log("Deu certo: \n" + conteudoDoRetornoDaPromise);
//   })
//   .catch((erro) => {
//     console.log("Deu ruim: \n" + erro);
//   })
//   .finally(() => {
//     console.log("Promessa encerrada.");
//   });

function lerArquivo() {
  return new Promise((resolve, reject) => {
    fs.readFile("assincrono/arquivo.txt", (erro, conteudo) => {
      if (erro) {
        reject("Ocorreu um erro: " + erro);
      } else {
        resolve(String(conteudo));
      }
    });
  });
}
lerArquivo()
  .then((conteudoDoRetornoDaPromise) => {
    console.log("Deu certo: \n" + conteudoDoRetornoDaPromise);
  })
  .catch((erro) => {
    console.log("Deu ruim: \n" + erro);
  })
  .finally(() => {
    console.log("Promessa encerrada.");
  });

// Async/Await

async function leituraDeDados() {
  console.log("Antes da promise ser resolvida.");
  try {
    const retornoDaPromise = await lerArquivo();
    console.log(retornoDaPromise);
    console.log("Depois da promise ser resolvida.");
  } catch (error) {
    console.log(error);
    console.log("Isso aqui é executado depois da promise(erro).");
  } finally {
    console.log("Finalizando promessa.");
  }
}

leituraDeDados();
