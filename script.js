export function somar(a, b) {
  return a + b;
}

export function mensagemBoasVindas(nome) {
  return `Olá, ${nome}!`;
}

export function maiorNumero(a, b) {
  if (a > b) return `${a} e maior que ${b}`;
  if (b > a) return `${b} e maior que ${a}`;
  return "Os números são iguais";
}
