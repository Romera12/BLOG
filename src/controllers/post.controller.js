const Post = require('../models/post.model');

const postController = {
    async create(req, res) {
        try {
            const { title, description, category, author_id } = req.body;
            if (!title || !description || !author_id) {
                return res.status(400).json({ error: 'Título, descripción y autor son obligatorios' });
            }
            const result = await Post.create({ title, description, category, author_id });
            res.status(201).json({ id: result.insertId, title, description, category, author_id });
        } catch (error) {
            console.error('Error en postController.create:', error); 
            res.status(500).json({ error: 'Error al crear el post', details: error.message });
        }
    },

    async getAll(req, res) {
        try {
            const posts = await Post.findAll();
            res.json(posts);
        } catch (error) {
            console.error('Error en postController.getAll:', error);
            res.status(500).json({ error: 'Error al obtener los posts', details: error.message });
        }
    },

    async getById(req, res) {
        try {
            const post = await Post.findById(req.params.id);
            if (!post) {
                return res.status(404).json({ error: 'Post no encontrado' });
            }
            res.json(post);
        } catch (error) {
            console.error('Error en postController.getById:', error);
            res.status(500).json({ error: 'Error al obtener el post', details: error.message });
        }
    },

    async getByAuthorId(req, res) {
        try {
            const posts = await Post.findByAuthorId(req.params.authorId);
            if (!posts.length) {
                return res.status(404).json({ error: 'No se encontraron posts para este autor' });
            }
            res.json(posts);
        } catch (error) {
            console.error('Error en postController.getByAuthorId:', error);
            res.status(500).json({ error: 'Error al obtener los posts del autor', details: error.message });
        }
    }
};

module.exports = postController;