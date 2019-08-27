const path = require('path');
const ZipPlugin = require('zip-webpack-plugin');

// fileName format
const date = new Date();
function pad2(n) { return n < 10 ? '0' + n : n }
let dateStr = date.getFullYear().toString() + pad2(date.getMonth() + 1) + pad2( date.getDate()) + pad2( date.getHours() ) + pad2( date.getMinutes() ) + pad2( date.getSeconds() );
let fileName = 'alaska_prod_' + dateStr +'.zip';

module.exports = {
    plugins: [
        new ZipPlugin({
            // OPTIONAL: defaults to the Webpack output path (above)
            // can be relative (to Webpack output path) or absolute
            path: __dirname + '/../distZip',

            // OPTIONAL: defaults to the Webpack output filename (above) or,
            // if not present, the basename of the path
            filename: fileName,

            // OPTIONAL: defaults to 'zip'
            // the file extension to use instead of 'zip'
            // extension: 'ext',

            // OPTIONAL: defaults to the empty string
            // the prefix for the files included in the zip file
            // pathPrefix: '',

            // OPTIONAL: defaults to the identity function
            // a function mapping asset paths to new paths
            // pathMapper: function(assetPath) {
            //     // put all pngs in an `images` subdir
            //     if (assetPath.endsWith('.png'))
            //         return path.join(path.dirname(assetPath), 'images', path.basename(assetPath));
            //     return assetPath;
            // },

            // OPTIONAL: defaults to including everything
            // can be a string, a RegExp, or an array of strings and RegExps
            // include: [/\.js$/],

            // OPTIONAL: defaults to excluding nothing
            // can be a string, a RegExp, or an array of strings and RegExps
            // if a file matches both include and exclude, exclude takes precedence
            // exclude: [/\.png$/, /\.html$/],

            // yazl Options

            // OPTIONAL: see https://github.com/thejoshwolfe/yazl#addfilerealpath-metadatapath-options
            fileOptions: {
                mtime: new Date(),
                mode: 0o100664,
                compress: true,
                forceZip64Format: false,
            },

            // OPTIONAL: see https://github.com/thejoshwolfe/yazl#endoptions-finalsizecallback
            zipOptions: {
                forceZip64Format: false,
            },
        })
    ]
};
