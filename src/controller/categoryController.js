const categoryService = require('../service/categoryService')

const getCategories = async (req, res) => {
    try {
        const categories = await categoryService.getCategories()
        res.status(200).json(categories)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getCategoryById = async (req, res) => {
    try {
        const { id } = req.params
        const category = await categoryService.getCategoryById(id)
        res.status(200).json(category)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getCategories,
    getCategoryById
}
