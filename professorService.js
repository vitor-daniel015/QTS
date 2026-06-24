function buscarProfessorNoBanco(id) {
    return {
        id,
        nome: 'Carlos Silva',
        email: 'carlos.silva@example.com',
        cpf: '123.456.789-00'
    };
}

function buscarStatusProfessorPorCurso(idCurso) {
    const status = idCurso % 2 === 0 ? 'determinado' : 'indeterminado';
    return { idCurso, status };
}

module.exports = { buscarProfessorNoBanco, buscarStatusProfessorPorCurso };