const usuarioService = require('../usuarioService');
const { obterNomeUsuario } = require('../usuarioController');

jest.spyOn(usuarioService, 'buscarUsuarioNoBanco');

test('deve retornar o nome do usuário simulado', () => {
    usuarioService.buscarUsuarioNoBanco.mockReturnValue({
        id: 1,
        nome: 'João Mockado'
    });

    const nome = obterNomeUsuario(1);

    expect(nome).toBe('João Mockado');
});