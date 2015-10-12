
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './src/main.jsx'
    ],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'build'),
        publicPath: '/build/'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ],
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    externals: {
        "react": "React"
    }
};
