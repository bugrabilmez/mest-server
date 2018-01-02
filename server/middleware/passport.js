const authentication = require('../../common/constants/authentication');
const jwt = require('./passport/jwt');

const _passport = () => {
    if (authentication.getEnv === authentication.authenticationType.jwt) {
        return jwt;
    } else throw new error('Undefined authentication type.');
};

const passport = _passport();

const _signIn = (req, res, next) => {
    passport.signIn(req, res, next);
};

const _signOut = () => {

};

const _check = () => {

};

const _register = () => {

};

const _initialize = () => {
    return passport.initialize();
}


module.exports = {
    signIn: _signIn,
    signOut: _signOut,
    check: _check,
    register: _register,
    initialize: _initialize
}