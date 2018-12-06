const path = require('path')
const webpack = require('webpack')

const DIST_PATH = path.resolve(__dirname, '../dist')
const APP_PATH = path.resolve(__dirname, '../src')

const config = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: "bundle.js",
        path: DIST_PATH
    },
    resolve: {
        modules: [
            APP_PATH,
            'node_modules'
        ]
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: APP_PATH,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ["env","react","stage-0"],
                cacheDirectory: true
              }
            }
        },{
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader:'css-loader',
                options: {
                    modules: true,
                    camelCase: true,
                    localIdentName: '[path][name]__[local]--[hash:base64:5]'
                }
            }]
        }]
    },
    devServer: {
        contentBase: DIST_PATH,//默认本地服务器在跟目录
        historyApiFallback: true,//不跳转，默认会跳转且都跳到index.html上
        inline: true,//源文件改变时刷新页面
        port:8085//更改端口号，默认8080
    },
    performance: {
        hints: false,
        maxAssetSize: 300000,
        maxEntrypointSize: 300000
    }
}

module.exports = config