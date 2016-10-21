var gulp = require('gulp'),
    webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    clean = require('gulp-clean'),
    _ = require('underscore'),
    config = require('./webpack.config');

/*
 * 任务：清除生编译生成的文件
 * */
gulp.task('clean', function () {
    var stream = gulp.src(['dev', 'dist'])
        .pipe(clean({
            force: true
        }));
    return stream;
});

/*
 * 任务：执行webpack打包
 * */
gulp.task('webpack', ['clean'], function (cb) {
    webpack(config, cb);
});
