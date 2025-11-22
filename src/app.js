const express = require('express');
const cors = require('cors');
const helmet = require("helmet")

const app = express();

app.use(cors())
app.use(helmet())
app.use(express.json())

app.use('/api/productos', require('./routes/products'))
app.use('/api/categorias', require('./routes/categories'))
app.use('/api/detalles-compra', require('./routes/detallesCompra'))
app.use('/api/usuarios', require('./routes/usuarios'))

module.exports = app;