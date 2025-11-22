const productService = require('../service/productService')

// OBTENER TODOS LOS PRODUCTOS
const getProducts = async (req, res) => {
    try {
        const { categoria } = req.query
        const products = await productService.getProducts(categoria)
        res.status(200).json(products)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// OBTENER PRODUCTO POR ID
const getProductById = async (req, res) => {
    try {
        const { id } = req.params
        const product = await productService.getProductById(id)
        res.status(200).json(product)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// CREAR PRODUCTO
const createProduct = async (req, res) => {
    try {
        const { 
            nombre, 
            precio, 
            id_categoria, 
            imagen_url, 
            descripcion, 
            stock 
        } = req.body;

        if (!nombre || !precio || !id_categoria || !descripcion || stock === undefined) {
            return res.status(400).json({ 
                success: false, 
                message: 'Faltan campos obligatorios' 
            });
        }

        if (parseInt(stock) <= 0) {
            return res.status(400).json({ 
                success: false, 
                message: 'El stock inicial debe ser mayor a 0.' 
            });
        }

        const newProductData = {
            nombre,
            precio: parseFloat(precio),
            id_categoria: parseInt(id_categoria),
            descripcion,
            stock: parseInt(stock),
            imagen_url: imagen_url ? imagen_url : null,
            disponible: true 
        };

        const newProduct = await productService.createProduct(newProductData);

        return res.status(201).json({
            success: true,
            message: 'Producto creado exitosamente',
            data: newProduct
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error al crear el producto',
            error: error.message
        });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ 
                success: false, 
                message: 'Se requiere el ID del producto para eliminarlo.' 
            });
        }

        await productService.deleteProduct(id);

        return res.status(200).json({
            success: true,
            message: 'Producto eliminado correctamente'
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error al eliminar el producto',
            error: error.message
        });
    }
};

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    deleteProduct
}



// EJEMPLO DEL BODY PARA CREAR PRODUCTO
// {
//   "nombre": "Catan",
//   "precio": 29990,
//   "id_categoria": 1,
//   "imagen_url": "https://gabwubphtjjunjeihhbu.supabase.co/storage/v1/object/public/Productos/producto_catan.jpg",
//   "descripcion": "Clásico de estrategia para 3-4 jugadores.",
//   "stock": 10
// }