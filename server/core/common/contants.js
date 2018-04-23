module.exports = {

    // Environment file constants
    env: {
        host: 'APPLICATION_HOST',
        port: 'APPLICATION_PORT',
        language: 'APPLICATION_LANGUAGE',
        authenticationType: 'AUTHENTICATION_TYPE',
        authenticationSecretKey: 'AUTHENTICATION_SECRET_KEY'
    },

    // Core constants
    authentication: {
        types: {
            jwt: 'jwt'
        }
    }
};