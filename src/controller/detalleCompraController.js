const detalleCompraService = require('../service/detalleCompraService')

const getDetallesCompra = async (req, res) => {
    try {
        const detalles = await detalleCompraService.getDetallesCompra()
        res.status(200).json(detalles)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getDetalleCompraById = async (req, res) => {
    try {
        const { id } = req.params
        const detalle = await detalleCompraService.getDetalleCompraById(id)
        res.status(200).json(detalle)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getDetallesCompra,
    getDetalleCompraById
}
