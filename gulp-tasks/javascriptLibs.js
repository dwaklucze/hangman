var gulp = require('gulp'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    strip = require('gulp-strip-comments'),
    /**/
    javascriptLibraries = [
      'node_modules/angular/angular.js',
    	'node_modules/angular-ui-router/release/angular-ui-router.min.js',
    	'node_modules/lodash/lodash.js'
    ];


gulp.task('libraries', function() {
    return gulp.src(javascriptLibraries)
    .pipe(concat('libs.js'))
    .pipe(strip())
    .pipe(gulp.dest('dist/'));
});

gulp.task('clean-libs', function(){
  return gulp.src('dist/libs.js', {read: false})
    .pipe(clean());
})
