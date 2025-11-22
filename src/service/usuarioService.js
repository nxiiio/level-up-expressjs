const supabase = require('../config/supabase')

// OBTENER TODOS LOS USUARIOS
const getUsuarios = async () => {
    const { data, error } = await supabase
        .from('usuarios')
        .select('*')
    if (error) {
        throw new Error(error.message)
    }
    return data
}

// OBTENER USUARIO POR ID
const getUsuarioById = async (id) => {
    const { data, error } = await supabase
        .from('usuarios')
        .select('*')
        .eq('id', id)
        .single()
    if (error) {
        throw new Error(error.message)
    }
    return data
}

module.exports = {
    getUsuarios,
    getUsuarioById
}
