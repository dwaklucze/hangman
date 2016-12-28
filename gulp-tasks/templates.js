var gulp = require('gulp'),
    connect = require('gulp-connect'),
    jade = require('gulp-jade');

gulp.task('templates', function() {
    var YOUR_LOCALS = {};

    gulp.src('src/views/**/*.jade')
        .pipe(jade({
            client: false,
            pretty: true

        }))
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload());

});
