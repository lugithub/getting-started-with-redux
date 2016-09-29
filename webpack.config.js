var webpack = require('webpack');

// var definePlugin = new webpack.DefinePlugin({
//   "process.env": {
//     NODE_ENV: JSON.stringify("production")
//   }
// });

module.exports = {
    entry: './public/scripts/main.js',
    output: {
        path: './public/scripts/build',
        filename: 'webpack-bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }]
    }
    //plugins: [definePlugin]
}
