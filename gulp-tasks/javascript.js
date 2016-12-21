var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    connect = require('gulp-connect'),
    /**/
    javascriptFiles = [
    	  __dirname + '/dist/libs.js',
        __dirname + '/src/scripts/main.js',
        __dirname + '/src/scripts/config.js',
        __dirname + '/src/scripts/**/*.js',
    ];


gulp.task('scripts', ['libraries'], function() {
    return gulp.src(javascriptFiles)
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'))
    .on('end', function(){
    	gulp.start('clean-libs');
    })
    .pipe(connect.reload());
});
