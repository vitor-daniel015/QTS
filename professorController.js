const professorService = require('./professorService');

function obterDadosProfessor(id) {
    const professor = professorService.buscarProfessorNoBanco(id);
    return {
        nome: professor.nome,
        email: professor.email,
        cpf: professor.cpf
    };
}

function obterStatusProfessor(idCurso) {
    const resultado = professorService.buscarStatusProfessorPorCurso(idCurso);
    return resultado.status;
}

module.exports = { obterDadosProfessor, obterStatusProfessor };