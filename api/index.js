require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(morgan('combined'));
// SANITY CHECK
server.get('/', (_req, res) => {
    res.send('Server is up and running');
});
const port = process.env.PORT || 5000;
server.listen(port, function() {
    console.log(`\n*** Listening on port ${port} ***\n`);
});
