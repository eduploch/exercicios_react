const webpack = require('webpack')


module.exports = {
    entry: './ex/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    resolve:{
        extensions: ['', '.js', '.jsx']

    },
  
    // O loader de js foi adicionado no ex.6
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                // Preset 'react' adicionado no ex.9
                presets: ['es2015', 'react'],
            
            }
        }], 
        
    }
}
