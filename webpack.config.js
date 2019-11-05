const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")

module.exports = {
    mode: "development",
    entry: {
        index: "./src/pages/index/index.js",
        examupload: "./src/pages/healthExamUpload/healthexamupload.js",
        question: "./src/pages/healthQuestionaire/healthquestionaire.js",
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "js/[name]-bundle.js",
        publicPath:"/"
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: "./dist",
        allowedHosts:[
            '10.28.133.188',
            'localhost'
        ]
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: (resourcePath, context) => {
                                // publicPath is the relative path of the resource to the context
                                // e.g. for ./css/admin/main.css the publicPath will be ../../
                                // while for ./css/main.css the publicPath will be ../
                                return path.relative(path.dirname(resourcePath), context) + '/';
                            },
                            filename: 'assets/[name]-bundle.css'
                        },
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {

            },
            {
                test: /\.(ttf|woff|eot|svg)/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: 'assets/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|png|jpeg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: 'assets/image/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: ['img:src']
                    }
                }
            },
            {
                test: /\.(ejs)$/,
                use: [
                    {
                        loader: 'ejs-loader',
                    }
                ]
            },

        ]
    },
    plugins: [
        new CleanWebpackPlugin.CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: './assets/style/[name].css',
            chunkFilename: '[id].css',
        }),
        new CopyWebpackPlugin([
            { from: "./static", to: "static/" }
        ]),


        /**
         * pages definition.
         */
        new HtmlWebpackPlugin({
            filename: "health/healthexamupload.html",
            template: "./src/pages/healthExamUpload/healthexamupload.ejs",
            hash: true,
            chunks: ['examupload']
        }),
        new HtmlWebpackPlugin({
            filename: "health/questionaire.html",
            template: "./src/pages/healthQuestionaire/healthquestionaire.ejs",
            hash: true,
            chunks: ['question']
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/pages/index/index.ejs",
            hash: true,
            chunks: ['index']
        }),
        

    ]


}