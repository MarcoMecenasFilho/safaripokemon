require('dotenv').config();
const cors = require('cors');

const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const  pokemonRouter  = require('./routers/pokemonRouter');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/pokemon', pokemonRouter);


app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));
