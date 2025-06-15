const pool = require('../config/db');

const Author = {
    // Inserts a new author record into the authors table.
    async create(author) {
        const query = 'INSERT INTO authors (name, email, image) VALUES (?, ?, ?)';
        const [result] = await pool.execute(query, [author.name, author.email, author.image]);
        return result;
    },
    // Retrieves all authors from the authors table.
    async findAll() {
        const query = 'SELECT * FROM authors';
        const [rows] = await pool.execute(query);
        return rows;
    },
    // Retrieves a single author by their unique ID.
    async findById(id) {
        const query = 'SELECT * FROM authors WHERE id = ?';
        const [rows] = await pool.execute(query, [id]);
        return rows[0];
    }
};

module.exports = Author;
