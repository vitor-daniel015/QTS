const componenteService = require('./componenteService');

function obterNomeComponente(id) {
    const componente = componenteService.buscarComponenteNoBanco(id);
    return componente.nome;
}

function obterHorarioComponente(id) {
    const componente = componenteService.buscarHorarioDoComponente(id);
    return componente.horario;
}

module.exports = { obterNomeComponente, obterHorarioComponente };