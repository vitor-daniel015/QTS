const usuarioService = require('./usuarioService');

function obterNomeUsuario(id) {
    const usuario = usuarioService.buscarUsuarioNoBanco(id);
    return usuario.nome;
}

module.exports = { obterNomeUsuario };