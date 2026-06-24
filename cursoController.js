const cursoService = require('./cursoService');

function obterNomeCurso(id) {
    const curso = cursoService.buscarCursoNoBanco(id);
    return curso.nome;
}

function obterPeriodoCurso(id) {
    const curso = cursoService.buscarCursoNoBanco(id);
    return curso.periodo;
}

module.exports = { obterNomeCurso, obterPeriodoCurso };