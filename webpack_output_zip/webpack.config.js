const path = require('path')
const merge = require('webpack-merge');

// modules
const commonModule = require('./config/webpack.common.js');
const devModule = require('./config/webpack.dev.js');
const prodModule = require('./config/webpack.prod.js');
const zipModule = require('./config/webpack.zip.js');

module.exports = (env, options) => {
    console.log("BUILD_TYPE : " + process.env.BUILD_TYPE);
    if(process.env.BUILD_TYPE === 'dev'){
        return merge(commonModule, devModule)
    }else if(process.env.BUILD_TYPE === 'prod') {
        return merge(commonModule, prodModule)
    }else if(process.env.BUILD_TYPE === 'zip') {
        return merge(commonModule, prodModule, zipModule)
    }
};