const path = require("path");
const StyleLintPlugin = require("stylelint-webpack-plugin");
const HhtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    output: {
        filename: 'bundle.js',
    },
    plugins: [
        new StyleLintPlugin({
            files: ["/**/*.css","/**/*.less","/**/*.sass","/**/*.html","/**/*.htm","/**/*.vue"]
        }),
        new HhtmlWebpackPlugin({
            template: path.resolve(__dirname,'./../index.html')
        })
    ],
    devtool: 'source-map'
}