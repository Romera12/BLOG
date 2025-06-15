const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'BLOG',
            description: '🔵 API for a blog platform.',

        },
        servers: [
            {
                url: 'http://localhost:3000/',
                description: 'Servidor',
            },
        ],
    },
    apis: ['./src/routes/api/*.routes.js'], 
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

module.exports = swaggerSpec;