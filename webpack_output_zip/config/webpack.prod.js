const Dotenv = require('dotenv-webpack')

module.exports = {
    plugins: [
        new Dotenv({
            path: __dirname + '/../env/.env.production' // Path to .env file (this is the default)
        })
    ]
};
