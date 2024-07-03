console.log("Fetch API");

fetch("http://viacep.com.br/ws/76824436/json/")
  .then((resposta) => {
    resposta.json().then((dados) => console.log(dados));
  })
  .catch((error) => {
    console.log(error);
  });
