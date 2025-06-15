const express = require('express');
const router = express.Router();

const authorRoutes = require('./api/author.routes');
const postRoutes = require('./api/post.routes');


router.use('/authors', authorRoutes);
router.use('/posts', postRoutes);

module.exports = router;