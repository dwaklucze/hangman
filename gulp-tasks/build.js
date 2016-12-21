var gulp = require('gulp');

gulp.task('build', ['scripts', 'styles', 'templates'], function(){
	gulp.start('webserver')

})