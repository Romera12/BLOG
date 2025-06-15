const Author = require('../models/author.model');

const authorController = {
    async create(req, res) {
        try {
            const { name, email, image } = req.body;
            if (!name || !email) {
                return res.status(400).json({ error: 'Nombre y email son obligatorios' });
            }
            const result = await Author.create({ name, email, image });
            res.status(201).json({ id: result.insertId, name, email, image });
        } catch (error) {
            console.error('Error en authorController.create:', error);
            res.status(500).json({ error: 'Error al crear el autor', details: error.message });
        }
    },

    async getAll(req, res) {
        try {
            const authors = await Author.findAll();
            res.json(authors);
        } catch (error) {
            console.error('Error en authorController.getAll:', error);
            res.status(500).json({ error: 'Error al obtener los autores', details: error.message });
        }
    },

    async getById(req, res) {
        try {
            const author = await Author.findById(req.params.id);
            if (!author) {
                return res.status(404).json({ error: 'Autor no encontrado' });
            }
            res.json(author);
        } catch (error) {
            console.error('Error en authorController.getById:', error);
            res.status(500).json({ error: 'Error al obtener el autor', details: error.message });
        }
    }
};

module.exports = authorController;