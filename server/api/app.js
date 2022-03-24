require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');

const express = require('express');
const errorHandler = require('../middleware/errorHandler');
const  pokemonRouter  = require('./routers/pokemonRouter');
const swaggerDocument = require('./swagger.json');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/pokemon', pokemonRouter);


app.use(errorHandler);

module.exports = app;