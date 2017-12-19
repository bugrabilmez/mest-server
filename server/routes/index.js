const express = require('express');
const index = express.Router();

index.get('/', (req, res) => {
    res.send('Hello world');
});

module.exports = index;