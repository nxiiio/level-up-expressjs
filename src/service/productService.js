const supabase = require('../config/supabase')


// OBTENER TODOS LOS PRODUCTOS
const getProducts = async (categoryId = null) => {
    let query = supabase
        .from('productos')
        .select('id, created_at, nombre, precio, imagen_url, descripcion, stock, categoria:id_categoria(*)')
    
    if (categoryId) {
        query = query.eq('id_categoria', categoryId)
    }
    
    const { data, error } = await query
    if (error) {
        throw new Error(error.message)
    }
    return data
}

// OBTENER PRODUCTO POR ID
const getProductById = async (id) => {
    const { data, error } = await supabase
        .from('productos')
        .select('id, created_at, nombre, precio, imagen_url, descripcion, stock, categoria:id_categoria(*)')
        .eq('id', id)
        .single()
    

    if (!data) {
        throw new Error('Producto not found')
    }

    if (error) {
        throw new Error(error.message)
    }
    
    return data
}

// CREAR PRODUCTO
const createProduct = async (productData) => {
    const { data, error } = await supabase
        .from('productos')
        .insert([productData])
        .select()
        .single()
    if (error) throw new Error(error.message);
    return data;
}

// ELIMINAR PRODUCTO
const deleteProduct = async (id) => {
    const { data, error } = await supabase
        .from('productos')
        .delete()
        .eq('id', id)
        .select('id')
        .maybeSingle()

    if (error) {
        throw new Error(error.message);
    }

    if (!data) {
        throw new Error('Producto not found')
    }
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    deleteProduct
}