const cursoService = require('../cursoService');
const { obterNomeCurso, obterPeriodoCurso } = require('../cursoController');

jest.spyOn(cursoService, 'buscarCursoNoBanco');

test('deve retornar o nome do curso simulado', () => {
    cursoService.buscarCursoNoBanco.mockReturnValue({
        id: 1,
        nome: 'DS',
        periodo: 'matutino'
    });

    const nome = obterNomeCurso(1);

    expect(nome).toBe('DS');
});

test('deve retornar o periodo do curso', () => {
    cursoService.buscarCursoNoBanco.mockReturnValue({
        id: 1,
        nome: 'DS',
        periodo: 'matutino'
    });

    const periodo = obterPeriodoCurso(1);

    expect(periodo).toBe('matutino');
});