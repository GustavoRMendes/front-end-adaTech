console.log("Fetch API");

// fetch("http://viacep.com.br/ws/76824436/json/")
//   .then((resposta) => {
//     resposta.json().then((dados) => console.log(dados));
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function obterDados() {
  try {
    const response = await fetch("http://viacep.com.br/ws/76824436/json/");
    const dados = await response.json();
    console.log(dados);
  } catch (error) {
    console.log("ERRO: " + error);
  } finally {
    console.log("FINALIZANDO A REQUISIÇÃO");
  }
}
obterDados();
