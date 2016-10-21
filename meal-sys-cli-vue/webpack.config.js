/**
 * 配置的打包文件
 */
var path = require('path'),
    webpack = require('webpack'),
    htmlWebpackPlugin = require('html-webpack-plugin'),
    transferWebpackPlugin = require('transfer-webpack-plugin'),
    extractTextPlugin = require('extract-text-webpack-plugin'),
    vue = require('vue-loader');

module.exports = {
    //JS文件引用入口配置
    entry: {
        common: ['jquery', 'underscore', 'vue', 'vue-router'],
        app: [
            'webpack/hot/dev-server',
            path.resolve(__dirname, './src/js/app.js')
        ]
    },

    //入口文件输出配置
    output: {
        path: path.resolve(__dirname, './dist/'), //指定生成文件的保存路径
        publicPath: '../', //更新 src、url 里的值，为其添加前缀（实际输出：publicPath + fileName）
        filename: 'js/[name].js',
        chunkFilename: 'js/modules/[name].js?v=[hash:8]'
    },

    //插件项
    plugins: [
        //html 文件生成插件
        new htmlWebpackPlugin({
            title: 'My Vue App',
            filename: 'index.html',
            template: 'src/index.html',
            hash: true
        }),
        //文件复制插件
        new transferWebpackPlugin([{
            from: './src/img/demo',
            to: 'img/demo'
        }]),
        //文件单独提取插件
        new extractTextPlugin('css/style.css', {
            allChunks: true,
            disable: false
        }),
        //公共组件提取插件
        new webpack.optimize.CommonsChunkPlugin('common', 'js/common.js'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    vue: {
        loaders: {
            css: extractTextPlugin.extract('css')
        }
    },

    module: {
        //指定没有依赖的模块，webpack将不再扫描这个文件中的依赖
        noParse: [],
        //加载器配置
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            //less 文件先通过 less-load 处理成 css，然后再通过 css-loader 加载成 css 模块，最后由 extractTextPlugin 插件通过 style-loader 加载器提取出 css 文件
            {
                test: /\.less$/,
                //loader: 'style-loader!css-loader!less-loader'
                loader: extractTextPlugin.extract('style-loader', 'css-loader!less-loader')
            },
            //图片文件使用 file-loader 来处理
            {
                test: /\.(png|jpg|gif)\??.*$/,
                loader: 'file-loader?name=img/[name].[ext]?[hash]'
            },
            //字体文件使用 file-loader 来处理
            {
                test: /\.(eot|svg|ttf|woff)\??.*$/,
                loader: 'file-loader?name=font/[name].[ext]?[hash]'
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
            'q': path.resolve(__dirname, 'node_modules/q/q.js'),
            'underscore': path.resolve(__dirname, 'node_modules/underscore/underscore-min.js'),
            'vue': path.resolve(__dirname, 'node_modules/vue/dist/vue.min.js'),
            'vue-router': path.resolve(__dirname, 'node_modules/vue-router/dist/vue-router.min.js'),
            'vuex': path.resolve(__dirname, 'node_modules/vuex/dist/vuex.min.js'),
            'vuex-logger': path.resolve(__dirname, 'node_modules/vuex/dist/logger.js')
        }
    },

    devServer: {
        inline: true,
        port: 3000,
        contentBase: '/dist/',
        publicPath: '/' //解决 hot-update.json 404 的问题
    }
};
