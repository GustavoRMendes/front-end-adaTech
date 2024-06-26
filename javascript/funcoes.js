// Função
function saudacao() {
  console.log("Olá, Mundo!");
}
saudacao();
// Função  com parâmetro padrão
function saudacaoComNome(nome = "aluno") {
  console.log("Olá, " + nome);
}
saudacaoComNome("Gustavo");
// Função com retorno
function saudacaoComRetorno() {
  return "Meu retorno";
}
console.log(saudacaoComRetorno());
// Função com parâmetros
function somar(numero1, numero2) {
  return numero1 + numero2;
}
console.log(somar(20, 10));
// Função anônima
const dobro = function (numero) {
  return numero * 2;
};
console.log(dobro(20));
// Arrow Function
message = () => console.log("mensagem");
message();

const triplo = (numero) => numero * 3;
console.log(triplo(20));
