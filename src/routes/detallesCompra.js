const express = require('express')
const router = express.Router()
const detalleCompraController = require('../controller/detalleCompraController')

router.get('/', detalleCompraController.getDetallesCompra)
router.get('/:id', detalleCompraController.getDetalleCompraById)

module.exports = router
