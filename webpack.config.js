var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src")


var config = {

    entry: SRC_DIR + '/app/app.js',
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },

    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    plugins: ["transform-object-rest-spread"],
                    presets: ["react", "es2016", "stage-2"]
                }
            }
        ]
    }
};

module.exports = config;