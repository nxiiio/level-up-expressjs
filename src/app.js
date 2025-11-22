const express = require('express');
const cors = require('cors');
const helmet = require("helmet")

const app = express();

app.use(cors())
app.use(helmet())
app.use(express.json())

app.use('/productos', require('./routes/products'))
app.use('/categorias', require('./routes/categories'))
app.use('/detalles-compra', require('./routes/detallesCompra'))
app.use('/usuarios', require('./routes/usuarios'))

module.exports = app;