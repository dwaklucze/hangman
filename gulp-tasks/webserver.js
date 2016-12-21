var gulp = require('gulp'),
	connect = require('gulp-connect');

gulp.task('webserver', function() {
    connect.server({
    root: ['dist', 'src/assets'],
    livereload: true,
    fallback: 'dist/index.html'
    })
});
