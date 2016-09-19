/* eslint "strict": ["error", "global"] */

'use strict';

var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

var devServerConfig = {
    hot: true,
    publicPath: '/public',
    proxy: {
        '!/public': {
            target: 'http://127.0.0.1:4000',
            secure: false
        }
    },
    stats: {
        colors: true
    }
};

var configFactory = function(options) {
    var wpconfig = {
        output: {
            path: path.resolve(__dirname, 'pldoc/public/'),
            publicPath: (options.publicPath || '/') + 'public/',
            filename: '[name].js',
            chunkFilename: 'chunk.[id].js'
        },
        entry: {
            'pattern-library-doc': [
                path.resolve(__dirname, 'pldoc/static/js/pattern-library-doc.js')
            ]
        },
        module: {
            loaders: [
                {
                    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: 'url?limit=64000'
                },
                {
                    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: 'file'
                },
                {
                    test: /\.css$/,  // Required for precompiled FontAwesome
                    loader: options.debug ? 'style!css' : ExtractTextPlugin.extract('style', 'css')
                },
                {
                    test: /\.scss$/,
                    loader: options.debug ? 'style!css!sass' : ExtractTextPlugin.extract('style', 'css!sass')
                }
            ]
        },
        resolve: {
            alias: {
                'edx-pattern-library': path.resolve(__dirname, 'pattern-library'),
                'edx-ui-toolkit': path.resolve(__dirname, 'node_modules/edx-ui-toolkit/src')
            },
            extensions: ['', '.js', '.css', '.scss', '.woff', '.woff2', '.ttf', '.eot', '.svg']
        },
        sassLoader: {
            data: "$pattern-library-path: '../../../pattern-library' !default;",
            sourceMap: true
        },
        plugins: [
            new webpack.NoErrorsPlugin()
        ],
        debug: options.debug,
        devtool: options.debug ? 'source-map' : null
    };

    // In debug (local) mode, we want hot module reload and CSS inlined into JS.
    // In prod mode, we disable HMR and use ExtractTextPlugin to generate .css files, avoiding a FOUC
    if (options.debug) {
        wpconfig.entry['pattern-library-doc'] = [].concat(
            'webpack/hot/dev-server',
            wpconfig.entry['pattern-library-doc']
        );
        wpconfig.plugins = [].concat(
            new webpack.HotModuleReplacementPlugin(),
            wpconfig.plugins
        );
        wpconfig.devServer = devServerConfig;
    } else {
        wpconfig.plugins = [].concat(
            new ExtractTextPlugin('[name].css'),
            new webpack.optimize.UglifyJsPlugin(),
            wpconfig.plugins
        );
    }

    return wpconfig;
};

module.exports = {
    default: configFactory({debug: process.env.NODE_ENV !== 'production'}),
    configFactory: configFactory,
    devServerConfig: devServerConfig
};
