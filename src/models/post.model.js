const pool = require('../config/db');

const Post = {
    // Inserts a new post record into the posts table.
    async create(post) {
        const query = 'INSERT INTO posts (title, description, category, author_id) VALUES (?, ?, ?, ?)';
        const [result] = await pool.execute(query, [post.title, post.description, post.category, post.author_id]);
        return result;
    },
    // Retrieves all posts along with their corresponding author details using a JOIN.
    async findAll() {
        const query = `
            SELECT posts.*, authors.name, authors.email, authors.image
            FROM posts
            JOIN authors ON posts.author_id = authors.id
        `;
        const [rows] = await pool.execute(query);
        return rows;
    },
    // Retrieves a specific post by its ID, including the author details.
    async findById(id) {
        const query = `
            SELECT posts.*, authors.name, authors.email, authors.image
            FROM posts
            JOIN authors ON posts.author_id = authors.id
            WHERE posts.id = ?
        `;
        const [rows] = await pool.execute(query, [id]);
        return rows[0];
    },
    // Retrieves all posts created by a specific author, including author information.
    async findByAuthorId(authorId) {
        const query = `
            SELECT posts.*, authors.name, authors.email, authors.image
            FROM posts
            JOIN authors ON posts.author_id = authors.id
            WHERE posts.author_id = ?
        `;
        const [rows] = await pool.execute(query, [authorId]);
        return rows;
    }
};

module.exports = Post;
