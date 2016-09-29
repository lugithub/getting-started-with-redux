var webpack = require('webpack');

// var definePlugin = new webpack.DefinePlugin({
//   "process.env": {
//     NODE_ENV: JSON.stringify("production")
//   }
// });

module.exports = {
    entry: './src/index.js',
    output: {
        path: './public/build',
        filename: 'webpack-bundle.js',
    },
    module: {
        loaders: [{
            test: /.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react']
            }
        }]
    }
    //plugins: [definePlugin]
}
