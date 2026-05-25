const { maiorNumero, mensagemBoasVindas, somar, ImparPar, Votar, Numeros, Bonus, Dirigir, Semestre, Vogal, ReceberArray, Login } = require('../script');

test('maior numero', () => {
  expect(maiorNumero(2, 3)).toBe(3);
});

test('mensagem de boas vindas', () => {
  expect(mensagemBoasVindas('Lais')).toBe('Olá, Lais!');
});

test('somar dois numeros', () => {
  expect(somar(2, 3)).toBe(5);
});

test('numero par ou impar', () => {
  expect(ImparPar(2, 3)).toBe('O primeiro numero é par: 2', 'O segundo numero é impar: 3');
});

test('condição votar', () => {
  expect(Votar(15)).toBe('Voce não pode votar');
});

test('condição numeros', () => {
  expect(Numeros(-2)).toBe('Numero negativo');
});

test('condição bonus', () => {
  expect(Bonus(5000)).toBe('Seu bônus é de: 500 e o total ficará 5500');
});

test('condição dirigir', () => {
  expect(Dirigir(18)).toBe('Voce pode dirigir');
});

test('semestre', () => {
  expect(Semestre('janeiro')).toBe('primeiro semestre');
});

test('vogal', () => {
  expect(Vogal('a')).toBe('E vogal');
});

test('receber array', () => {
  expect(ReceberArray([1,2,3,4,5])).toBe(3);
});

test('tela login', () => {
  expect(Login('Admin','123')).toBe('Conectado com sucesso!');
});




