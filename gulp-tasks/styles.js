var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    /**/
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    uncss = require('postcss-discard-unused'),
    dduplicates = require('postcss-discard-duplicates'),
    cssnano = require('cssnano');



gulp.task('styles', function() {

    var cssnanoSettings = [
    ],
    processors = [
        autoprefixer({browsers: ['last 1 version']}),
        uncss([]),
        dduplicates(),
        cssnano(cssnanoSettings)
    ];

    return gulp.src('./src/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/css'))
        .pipe(connect.reload());

});
