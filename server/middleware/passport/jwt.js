const _ = require('lodash');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const passport_jwt = require('passport-jwt');
const authentication = require('../../../common/constants/authentication');

const users = [
    {
        id: 1,
        name: 'admin',
        password: 'admin'
    },
    {
        id: 2,
        name: 'test',
        password: 'test'
    }
];

const ExtractJwt = passport_jwt.ExtractJwt;
const JwtStrategy = passport_jwt.Strategy;

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader(),
    secretOrKey: authentication.secretOrKey
};

const strategy = new JwtStrategy(jwtOptions, (payload, done) => {
    console.log('payload received', payload);
    // db
    const user = users[_.findIndex(users, { id: payload.id })];
    if (user) {
        done(null, user);
    } else {
        done(null, false);
    }
});

passport.use(strategy);

const _initialize = () => {
    return passport.initialize();
};

const _authenticate = () => {
    return passport.authenticate(authentication.getEnv, { session: false });
};

const _signIn = (req, res, next) => {
    if (req.body.name && req.body.password) {
        const name = req.body.name;
        const password = req.body.password;
    }
    // usually this would be a database call:
    var user = users[_.findIndex(users, { name: name })];
    if (!user) {
        res.status(401).json({ message: "no such user found" });
    }

    if (user.password === req.body.password) {
        // from now on we'll identify the user by the id and the id is the only personalized value that goes into our token
        var payload = { id: user.id };
        var token = jwt.sign(payload, jwtOptions.secretOrKey);
        res.json({ message: "ok", token: token });
    } else {
        res.status(401).json({ message: "passwords did not match" });
    }
};

module.exports = {
    signIn: _signIn,
    initialize: _initialize,
    authenticate: _authenticate
};