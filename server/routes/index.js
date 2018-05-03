const express = require('express');
const index = express.Router();

const authenticationFactory = require('../core/authentication/factory').instance();
const ormFactory = require('../core/orm/factory').instance();

index.get('/', (req, res) => {
    res.send('Hello world');
});

index.post('/login', authenticationFactory.signIn, (req, res, next) => {
    res.send('test');
});

index.get('/testLogin', authenticationFactory.authenticate, (req, res, next) => {
    res.json({ message: "Success! You can not see this without a token" });
});

index.post('/createUser', authenticationFactory.authenticate, (req, res, next) => {    
    ormFactory.create(req.app.locals.db.EntUser, { name: req.body.name, surname: req.body.surname, identityNumber: req.body.identityNumber }, (result) => {
        res.json({ message: "Success! You can not see this without a token", result: result });
    });
});

module.exports = index;