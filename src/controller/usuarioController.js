const usuarioService = require('../service/usuarioService')

const getUsuarios = async (req, res) => {
    try {
        const usuarios = await usuarioService.getUsuarios()
        res.status(200).json(usuarios)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getUsuarioById = async (req, res) => {
    try {
        const { id } = req.params
        const usuario = await usuarioService.getUsuarioById(id)
        res.status(200).json(usuario)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getUsuarios,
    getUsuarioById
}
