const productService = require('../service/productService');
const { validateProduct } = require('../schemas/productSchema');
const catchAsync = require('../utils/catchAsync');


// OBTENER TODOS LOS PRODUCTOS
const getProducts = catchAsync(async (req, res) => {
    const { categoria } = req.query;
    const products = await productService.getProducts(categoria);
    res.status(200).json(products);
});


// OBTENER PRODUCTO POR ID
const getProductById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const product = await productService.getProductById(id);
    res.status(200).json(product);
});


// CREAR PRODUCTO
const createProduct = catchAsync(async (req, res) => {
    const validatedData = validateProduct(req.body);
    const newProduct = await productService.createProduct(validatedData);

    res.status(201).json({
        success: true,
        message: 'Producto creado exitosamente',
        data: newProduct
    });
});


// ELIMINAR PRODUCTO
const deleteProduct = catchAsync(async (req, res) => {
    const { id } = req.params;
    
    await productService.deleteProduct(id);

    res.status(204).json({
        success: true
    });
});

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    deleteProduct
};