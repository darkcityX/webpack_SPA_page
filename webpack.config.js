const path = require("path");
const StylelintPlugin = require("stylelint-webpack-plugin");

module.exports = function(env,argv){
    env = env || {development: true}
    
    return {
        ...env.production?require("./config/webpack.production") : require("./config/webpack.development"),
        entry: "./src/js/index",
        module: {
            rules: [
                // javasript
                {
                    test: /\.(js|jsx)$/i,
                    use: [
                        {
                            loader: "babel-loader",
                            options: {
                                presets: ["@babel/preset-env"]
                            }
                        },
                        {
                            loader: "eslint-loader",
                            options: {
                                exclude: /node_modules|bowser_modules/
                            }
                        }
                    ]
                },
                // css
                {
                    test: /\.css$/i,
                    use: ["style-loader","css-loader",{
                        loader: "postcss-loader",
                        options: {
                            plugins: [
                                require("autoprefixer")
                            ]
                        }
                    }]
                },
                // less
                {
                    test: /\.less$/i,
                    use: [
                        "style-loader",
                        "css-loader",
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: [
                                    require("autoprefixer")
                                ]
                            }
                        },
                        "less-loader"
                    ]
                },
                // images
                {
                    test: /\.(png|jpg|git)$/i,
                    use: {
                        loader: "url-loader",
                        options: {
                            outputPath: "imgs/",
                            limit: 4*1024
                        }
                    }
                },
                // fonts
                {
                    test: /\.(eot|svg|ttf|woff|woff2)$/i,
                    use: {
                        loader: "url-loader",
                        options: {
                            outputPath: 'fonts/',
                            limit: 4*1024
                        }
                    }
                }
                
            ]
        }
    }
}

// module.exports = {
//     mode: "development",
//     entry: "./src/js/index",
//     output: {
//         path: path.resolve(__dirname,"dist"),
//         filename: "bundle.min.js"
//     },
//     plugins: [
//         new StylelintPlugin({
//             files: ["/**/*.css","/**/*.less","/**/*.sass","/**/*.html","/**/*.htm","/**/*.vue"]
//         })
//     ]
// }