// High Order Function

function retornoFuncao() {
  return () => console.log("Retorno");
}

const somar = (numero1, numero2) => numero1 + numero2;

function calcular(funcaoDeSoma) {
  return console.log(funcaoDeSoma(20, 20));
}
calcular(somar);
