const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },

    devServer: {
        static: {
            directory: path.join(__dirname, './dist')
        }
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader",
            }
        ]
    },
    
    resolve: {
        extensions: ['.js', '.jsx']
    }
}