function somar(a, b) {
  return a + b;
}

function mensagemBoasVindas(nome) {
  return `Olá, ${nome}!`;
}

function maiorNumero(a, b) {
  if (a>b) {return `${a} e maior que ${b}`}
  else if (b>a) {return `${b} e maior que ${a}`}
  else {return `Numero invalido`}
}

module.exports = { somar, mensagemBoasVindas, maiorNumero };
// export default { somar, mensagemBoasVindas };