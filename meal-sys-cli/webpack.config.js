/**
 * 配置的打包文件
 */
var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var transferWebpackPlugin = require('transfer-webpack-plugin');
var extractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    //插件项
    plugins: [
        //html 文件生成插件
        new htmlWebpackPlugin({
            title: 'My React App',
            filename: 'index.html',
            template: './src/index.html',
            hash: true
        }),
        //css 单独打包模块插件
        new extractTextPlugin('./css/base.css'),
        //文件复制插件
        new transferWebpackPlugin([{
            from: './src/font',
            to: './font'
        }, {
            from: './src/img',
            to: './img'
        }]),
        //公共组件提取插件
        new webpack.optimize.CommonsChunkPlugin('common', 'js/common.js'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    
    //页面入口文件配置
    entry: {
        common: ['react', 'history', 'react-router', 'reflux'],
        app: [
            'webpack/hot/dev-server',
            path.resolve(__dirname, './src/js/app.js')
        ]
    },
    
    //入口文件输出配置
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].js'
    },
    
    module: {
        //指定没有依赖的模块，webpack将不再扫描这个文件中的依赖
        noParse: [
            'react'
        ],
        //加载器配置
        loaders: [
            //less 文件先通过 less-load 处理成 css，然后再通过 css-loader 加载成 css 模块，最后由 style-loader 加载器对其做最后的处理，从而运行时可以通过 style 标签将其应用到最终的浏览器环境
            { 
                test: /\.less/, 
                loader: extractTextPlugin.extract('style-loader', 'css-loader!less-loader')
            },
            //.js 文件使用 jsx-loader 来编译处理 jsx-loader 可以添加 ?harmony 参数使其支持 ES6 语法
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                } //备注：es2015 用于支持 ES6 语法，react 用于解决 render() 报错的问题
            },
            //图片文件使用 url-loader 来处理，小于 8kb 的直接转为 base64
            { 
                test: /\.(png|jpg|gif|eot|svg|ttf|woff)\??.*$/, 
                loader: 'url-loader?limit=0'
            }
        ]
    },
    
    //其它解决方案配置
    resolve: {
        //查找 module 的话从这里开始查找
        root: __dirname + '\src',
        //自动扩展文件后缀名，意味着我们 require 模块可以省略不写后缀名
        extensions: ['', '.js', '.json', '.less'],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
            'react': path.resolve(__dirname, 'node_modules/react/dist/react.min.js'),
            'history': path.resolve(__dirname, 'node_modules/history/umd/history.min.js'),
            'react-router': path.resolve(__dirname, 'node_modules/react-router/umd/ReactRouter.min.js'),
            'reflux': path.resolve(__dirname, 'node_modules/reflux/dist/reflux.min.js'),
            'underscore': path.resolve(__dirname, 'node_modules/underscore/underscore.js'),
            'q': path.resolve(__dirname, 'node_modules/q/q.js')
        }
    },
    
    devServer: {
        inline: true,
        port: 3000
    }
};