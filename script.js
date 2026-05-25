
function maiorNumero(a,b){
  if (a>b){
    return a
  }
  else {
    return b 
  }
}
function mensagemBoasVindas(nome) {
  return `Olá, ${nome}!`;
}
function somar(c,d){
  return c + d
}
function ImparPar(a, b){
  if (a%2==0) { return `O primeiro numero é par: ${a}` }
  else if (a%2==1) {return `O primeiro numero é impar: ${a}`}

  if (b%2==0) { return `O segundo numero é par: ${b}` }
  else { return `O segundo numero é impar: ${b}` }
}
function Votar(a){
  if (a<16) { return `Voce não pode votar`}
  if (a>=16 && a<18) { return `Voce tem voto opcional`}
  if (a>=18) {return `Voce é obrigado a votar`}
  if (a>=70) {return `Vocew tem voto opcional`}
}
function Numeros(a){
  if(a>0) {return `Numero positivo`}
  if(a==0) { return `Numero igual a zero`}
  if(a<0) {return `Numero negativo`}
}
function Bonus(a){
  if(a<2000){
    conta = (20/100)*a
    return `Seu bônus é de: ${conta} e o total ficará ${conta+a}`
  }
  if(a>=2000 && a<=5000){
    conta = (10/100)*a
    return `Seu bônus é de: ${conta} e o total ficará ${conta+a}`
  }
  if(a>5000){
    conta = (5/100)*a
    return `Seu bônus é de: ${conta} e o total ficará ${conta+a}`
  }
}
function Dirigir(a){
  if(a<18) {return `Voce não pode dirigir`}
  if(a>=18) {return `Voce pode dirigir`}
}
function Semestre(a){
  if(a== 'janeiro' || 'fevereiro' || 'março' || 'abril' || 'maio' || 'junho')
  return `primeiro semestre`
  if(a== 'julho' || 'agosto' || 'setembro' || 'outubro' || 'novembro' || 'dezembro')
  return `segundo semestre`
}
// sla

module.exports = {maiorNumero, mensagemBoasVindas, somar, ImparPar, Votar, Numeros, Bonus, Dirigir, Semestre};
