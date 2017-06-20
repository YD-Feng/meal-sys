/**
 * 配置的打包文件
 */
var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var transferWebpackPlugin = require('transfer-webpack-plugin');

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
        //文件复制插件
        new transferWebpackPlugin([{
            from: './src/img/demo',
            to: './img/demo'
        }]),
        //公共组件提取插件
        new webpack.optimize.CommonsChunkPlugin('common', 'js/common.js'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    //JS文件引用入口配置
    entry: {
        common: ['react', 'react-dom', 'history', 'react-router', 'redux', 'react-redux'],
        app: [
            'webpack/hot/dev-server',
            path.resolve(__dirname, './src/js/index.js')
        ]
    },

    //入口文件输出配置
    output: {
        path: path.resolve(__dirname, './dist'), //指定生成文件的保存路径
        filename: 'js/[name].js',
        chunkFilename: 'js/modules/[name].js?v=[hash:8]'
    },

    module: {
        //指定没有依赖的模块，webpack将不再扫描这个文件中的依赖
        noParse: [
            'react', 'redux', 'react-redux'
        ],
        //加载器配置
        loaders: [
            //less 文件先通过 less-load 处理成 css，然后再通过 css-loader 加载成 css 模块，最后由 style-loader 加载器对其做最后的处理，从而运行时可以通过 style 标签将其应用到最终的浏览器环境
            {
                test: /\.less/,
                loader: 'style-loader!css-loader!less-loader'
            },
            //.js 文件使用 babel-loader 来编译处理
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                } //备注：es2015 用于支持 ES6 语法，react 用于解决 render() 报错的问题
            },
            //图片文件使用 file-loader 来处理
            {
                test: /\.(png|jpg|gif)\??.*$/,
                loader: 'file-loader?name=./img/[name].[ext]?[hash]'
            },
            //字体文件使用 file-loader 来处理
            {
                test: /\.(eot|svg|ttf|woff)\??.*$/,
                loader: 'file-loader?name=./font/[name].[ext]?[hash]'
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
            'react-dom': path.resolve(__dirname, 'node_modules/react-dom/dist/react-dom.min.js'),
            'react-redux': path.resolve(__dirname, 'node_modules/react-redux/dist/react-redux.min.js'),
            'history': path.resolve(__dirname, 'node_modules/history/umd/history.min.js'),
            'react-router': path.resolve(__dirname, 'node_modules/react-router/umd/ReactRouter.min.js'),
            'redux': path.resolve(__dirname, 'node_modules/redux/dist/redux.min.js'),
            'underscore': path.resolve(__dirname, 'node_modules/underscore/underscore-min.js'),
            'q': path.resolve(__dirname, 'node_modules/q/q.js')
        }
    },

    devServer: {
        inline: true,
        port: 3000
    }
};
