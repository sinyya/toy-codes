const Dotenv = require('dotenv-webpack')

module.exports = {
    plugins: [
        new Dotenv({
            path: __dirname + '/../env/.env.development' // Path to .env file (this is the default)
        })
    ]
};