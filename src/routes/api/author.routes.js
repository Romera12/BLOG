// src/routes/api/author.routes.js
const express = require('express');
const router = express.Router();
const authorController = require('../../controllers/author.controller');
const validateId = require('../../middlewares/validateId.middlewares');

/**
 * @swagger
 * /api/authors:
 *   post:
 *     summary: Register a new author
 *     tags: [Authors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Full name of the author
 *               email:
 *                 type: string
 *                 description: Author's email address
 *               image:
 *                 type: string
 *                 description: URL to the author's profile image (optional)
 *             required:
 *               - name
 *               - email
 *     responses:
 *       201:
 *         description: Author successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 image:
 *                   type: string
 *             example:
 *               id: 1
 *               name: "user1"
 *               email: "user1@example.com"
 *               image: "http://example.com/user1.jpg"
 *       400:
 *         description: Name and email are required fields
 *       500:
 *         description: Internal server error while creating the author
 */
router.post('/', authorController.create);

/**
 * @swagger
 * /api/authors:
 *   get:
 *     summary: Retrieve all authors
 *     tags: [Authors]
 *     responses:
 *       200:
 *         description: A list of all registered authors
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   image:
 *                     type: string
 *       500:
 *         description: Internal server error while retrieving authors
 */
router.get('/', authorController.getAll);

/**
 * @swagger
 * /api/authors/{id}:
 *   get:
 *     summary: Get a specific author by ID
 *     tags: [Authors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: The ID of the author 
 *     responses:
 *       200:
 *         description: Author found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 image:
 *                   type: string
 *       400:
 *         description: The ID parameter must be a positive integer
 *       404:
 *         description: Author not found
 *       500:
 *         description: Internal server error while retrieving the author
 */
router.get('/:id', validateId('id'), authorController.getById);

module.exports = router;
