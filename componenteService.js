function buscarComponenteNoBanco(id) {
    return { id, nome: 'Matemática' };
}

function buscarHorarioDoComponente(id) {
    return {
        id,
        horario: {
            inicio: '08:00',
            fim: '09:40',
            dia: 'Segunda-feira'
        }
    };
}

module.exports = { buscarComponenteNoBanco, buscarHorarioDoComponente };