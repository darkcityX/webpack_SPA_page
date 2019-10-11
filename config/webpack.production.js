const path = require("path");
const StyleLintPlugin = require("stylelint-webpack-plugin");
const HhtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    output: {
        path: path.resolve(__dirname,"../dist"),
        filename: 'bundle.min.js',
    },
    plugins: [
        new StyleLintPlugin({
            files: ["/**/*.css","/**/*.less","/**/*.sass","/**/*.html","/**/*.htm","/**/*.vue"]
        }),
        new HhtmlWebpackPlugin({
            template: path.resolve(__dirname,'./../index.html')
        })
    ]
}