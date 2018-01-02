module.exports = {
    getEnv: process.env.AUTHENTICATION_TYPE,
    secretOrKey: process.env.AUTHENTICATION_SECRET_KEY,
    authenticationType: {
        jwt: 'jwt'
    }
};
