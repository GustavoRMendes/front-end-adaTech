const fs = require("fs");

// * Callback
console.log("Antes da função de ler o arquivo");
fs.readFile("assincrono/arquivo.txt", (erro, conteudo) => {
  if (erro) {
    console.log("Ocorreu um erro");
  } else {
    console.log(String(conteudo));
  }
});
console.log("Depois da função de ler o arquivo");
