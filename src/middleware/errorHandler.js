const { z } = require('zod');

const errorHandler = (err, req, res, next) => {
    // Error de validación Zod
    if (err instanceof z.ZodError) {
        return res.status(400).json({
            success: false,
            message: 'Errores de validación',
            errors: err.issues.map(error => ({
                field: error.path.join('.'),
                message: error.message
            }))
        })
    }


    if (err.message && (err.message.includes('not found'))) {
        return res.status(404).json({
            success: false,
            message: err.message
        });
    }

    if (err.statusCode) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message
        });
    }

    return res.status(500).json({
        success: false,
        message: 'Server internal error',
        error: err.message // Solo para desarrollo
    });
};

module.exports = errorHandler;