const supabase = require('../config/supabase')

// OBTENER TODOS LOS DETALLES DE COMPRA
const getDetallesCompra = async () => {
    const { data, error } = await supabase
        .from('detalle_compra')
        .select('id, created_at, cantidad, precio_unitario, usuario:usuario_id(*), producto:producto_id(id, created_at, nombre, precio, imagen_url, descripcion, categoria:categorias(*))')
    if (error) {
        throw new Error(error.message)
    }
    return data
}

// OBTENER DETALLE DE COMPRA POR ID
const getDetalleCompraById = async (id) => {
    const { data, error } = await supabase
        .from('detalle_compra')
        .select('id, created_at, cantidad, precio_unitario, usuario:usuario_id(*), producto:producto_id(id, created_at, nombre, precio, imagen_url, descripcion, categoria:categorias(*))')
        .eq('id', id)
        .single()
    if (error) {
        throw new Error(error.message)
    }
    return data
}

module.exports = {
    getDetallesCompra,
    getDetalleCompraById
}
