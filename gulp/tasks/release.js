var browserify   = require('browserify');
var gulp         = require('gulp');
var source       = require('vinyl-source-stream');
var config       = require('../config');
var babelify     = require('babelify');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
gulp.task('jsx-release', function() {
    var bundleList = config.browserify.bundleConfigs;
    bundleList.forEach(function(bundleConfig) {
        var b = browserify({
            entries: bundleConfig.entries,
            extensions: config.browserify.extensions,
            debug: false
        })
        // if(bundleConfig.outputName !== 'react.js')
        //     b.exclude('react')
        b.transform(babelify,{stage:1})
        .bundle()
        .pipe(source(bundleConfig.outputName))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest(bundleConfig.dest))
    })
});

gulp.task('less-release', function() {
  return gulp.src(config.less.src)
        .pipe(less())
        .pipe(autoprefixer({cascade: false, browsers: ['last 2 versions']}))
        .pipe(minifyCSS())
        .pipe(gulp.dest(config.less.dest));
});

gulp.task('markup-release', function() {
    return gulp.src(config.markup.src)
    .pipe(gulp.dest(config.markup.dest))
});

gulp.task('release', ['jsx-release','less-release','markup-release'])