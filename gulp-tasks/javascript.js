var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    connect = require('gulp-connect'),
    /**/
    javascriptFiles = [
    	'dist/libs.js',
        'src/scripts/main.js',
        'src/scripts/config.js',
        'src/scripts/**/*.js',
    ];


gulp.task('scripts', ['libraries'], function() {
    return gulp.src(javascriptFiles)
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.js'))
    .pipe(sourcemaps.write())
    //.pipe(uglify())
    .pipe(gulp.dest('dist'))
    .on('end', function(){
    	gulp.start('clean-libs');
    })
    .pipe(connect.reload());
});
