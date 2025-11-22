import supabase from '../config/supabase.js'

// OBTENER TODOS LOS PRODUCTOS
const getProducts = async (categoryId = null) => {
    let query = supabase
        .from('productos')
        .select('id, created_at, nombre, precio, imagen_url, descripcion, categoria:categorias(*)')
    
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
        .select('id, created_at, nombre, precio, imagen_url, descripcion, categoria:categorias(*)')
        .eq('id', id)
        .single()
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
};

// ELIMINAR PRODUCTO
const deleteProduct = async (id) => {
    const { data, error } = await supabase
        .from('productos')
        .delete()
        .eq('id', id)
    if (error) {
        throw new Error(error.message)
    }
    return data
}

export default {
    getProducts,
    getProductById,
    createProduct,
    deleteProduct
}