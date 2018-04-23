const express = require('express');
const index = express.Router();
const authenticationFactory = require('../core/authentication/factory').instance();
const passportNode = require('passport');

index.get('/', (req, res) => {
    res.send('Hello world');
});

index.post('/login', authenticationFactory.signIn, (req, res, next) => {
    res.send('test');
});

index.get('/testLogin', authenticationFactory.authenticate, (req, res, next) => {
    res.json({ message: "Success! You can not see this without a token" });
});

module.exports = index;