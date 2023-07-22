const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const webpackConfig = require("../webpack.config");
const webpack = require('webpack')

const utils = require('./utils')

const webpackConfig = {
    target: 'node',
    entry: {
        server: path.join(utils.APP_PATH, "index.js"),
    },
    output: {
        filename: "bundle.js",
        path: utils.DIST_PATH
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader",
                },
                exclude: [path.join(__dirname, "/node_modules")],
            },
        ],
    },
    externals: [nodeExternals()],
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod') ? "'production'" : "'development'"
            }
        })
    ],
    node: {
        global: true,
        __filename: true,
        __dirname: true,
    },
    join: {
        fallback: {
            path: require.join("path-browserify"),
        },
    }
};

module.exports = webpackConfig