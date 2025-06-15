const express = require('express');
const router = express.Router();
const postController = require('../../controllers/post.controller');
const validateId = require('../../middlewares/validateId.middlewares');

/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: Create a new post 
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Post title
 *               description:
 *                 type: string
 *                 description: Post content or body
 *               category:
 *                 type: string
 *                 description: Optional category for the post
 *               author_id:
 *                 type: integer
 *                 description: ID of the author
 *             required:
 *               - title
 *               - description
 *               - author_id
 *     responses:
 *       201:
 *         description: Post successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 *                 category:
 *                   type: string
 *                   nullable: true
 *                 author_id:
 *                   type: integer
 *             example:
*               id: 1
*               title: "Exploring Node.js Best Practices"
*               description: "A comprehensive guide to writing clean and maintainable code using Node.js and Express."
*               category: "Backend Development"
*               author_id: 3
 *       400:
 *         description: Title, description, and author ID are required
 *       500:
 *         description: Failed to create the post due to a server error
 */
router.post('/', postController.create);

/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Retrieve all posts including author details
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: Returns a list of all posts along with author information
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *                   creation_date:
 *                     type: string
 *                     format: date-time
 *                   category:
 *                     type: string
 *                   author_id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   image:
 *                     type: string
 *       500:
 *         description: Failed to retrieve posts due to a server error
 */
router.get('/', postController.getAll);

/**
 * @swagger
 * /api/posts/{id}:
 *   get:
 *     summary: Get a specific post by ID including author details
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: Post ID 
 *     responses:
 *       200:
 *         description: Post found and returned successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 *                 creation_date:
 *                   type: string
 *                   format: date-time
 *                 category:
 *                   type: string
 *                 author_id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 image:
 *                   type: string
 *       404:
 *         description: Post not found
 *       500:
 *         description: Failed to retrieve the post due to a server error
 */
router.get('/:id', validateId('id'), postController.getById);

/**
 * @swagger
 * /api/posts/author/{authorId}:
 *   get:
 *     summary: Get all posts created by a specific author
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: authorId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: Author ID 
 *     responses:
 *       200:
 *         description: Returns all posts authored by the specified user
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *                   creation_date:
 *                     type: string
 *                     format: date-time
 *                   category:
 *                     type: string
 *                   author_id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   image:
 *                     type: string
 *       404:
 *         description: No posts found for this author
 *       500:
 *         description: Failed to retrieve author's posts due to a server error
 */
router.get('/author/:authorId', validateId('authorId'), postController.getByAuthorId);

module.exports = router;
