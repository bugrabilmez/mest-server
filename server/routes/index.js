const express = require('express');
const index = express.Router();
const passport = require('../middleware/passport');
const passportNode = require('passport');

index.get('/', (req, res) => {
    res.send('Hello world');
});

index.post('/login', passport.signIn, (req, res, next) => {
    res.send('test');
});

index.get('/testLogin', passport.authenticate, (req, res, next) => {
    res.json({ message: "Success! You can not see this without a token" });
});

module.exports = index;