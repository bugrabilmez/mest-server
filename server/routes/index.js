const express = require('express');
const index = express.Router();
const passport = require('../middleware/passport');

index.get('/', (req, res) => {
    res.send('Hello world');
});

index.post('login', passport.signIn, (req, res, next) => {
    res.send('test');
});

module.exports = index;