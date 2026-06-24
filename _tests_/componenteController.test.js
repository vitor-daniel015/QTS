const componenteService = require('../componenteService');
const { obterNomeComponente, obterHorarioComponente } = require('../componenteController');

jest.spyOn(componenteService, 'buscarComponenteNoBanco');
jest.spyOn(componenteService, 'buscarHorarioDoComponente');

test('deve retornar o nome do componente simulado', () => {
    componenteService.buscarComponenteNoBanco.mockReturnValue({
        id: 1,
        nome: 'Física'
    });

    const nome = obterNomeComponente(1);

    expect(nome).toBe('Física');
});

test('deve retornar o horario do componente simulado', () => {
    componenteService.buscarHorarioDoComponente.mockReturnValue({
        id: 1,
        horario: {
            inicio: '10:00',
            fim: '11:40',
            dia: 'Quarta-feira'
        }
    });

    const horario = obterHorarioComponente(1);

    expect(horario).toEqual({
        inicio: '10:00',
        fim: '11:40',
        dia: 'Quarta-feira'
    });
});

test('exemplo com função falsa para componente', () => {
    const funcaoFalsa = jest.fn();
    funcaoFalsa.mockReturnValue({
        status: 'professor determinado',
        nome: 'Física',
        horario: {
            inicio: '10:00',
            fim: '11:40',
            dia: 'Quarta-feira'
        }
    });

    const resultado = funcaoFalsa();

    expect(resultado).toEqual({
        status: 'professor determinado',
        nome: 'Física',
        horario: {
            inicio: '10:00',
            fim: '11:40',
            dia: 'Quarta-feira'
        }
    });
    expect(funcaoFalsa).toHaveBeenCalled();
});