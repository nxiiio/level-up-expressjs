const supabase = require('../config/supabase')

// OBTENER TODOS LOS PRODUCTOS
const getProducts = async () => {
    const { data, error } = await supabase
        .from('productos')
        .select('id, created_at, nombre, precio, imagen_url, descripcion, categoria:categorias(*)')
    if (error) {
        throw new Error(error.message)
    }
    return data
}

// OBTENER PRODUCTO POR ID
const getProductById = async (id) => {
    const { data, error } = await supabase
        .from('productos')
        .select('id, created_at, nombre, precio, imagen_url, descripcion, categoria:categorias(*)')
        .eq('id', id)
        .single()
    if (error) {
        throw new Error(error.message)
    }
    return data
}

module.exports = {
    getProducts
}