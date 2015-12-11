var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var jasmineBrowser = require('gulp-jasmine-browser');

gulp.task('tests', function() {
	return gulp.src('tests/*.js')
		//.pipe(jasmine());
		.pipe(jasmineBrowser.specRunner())
		.pipe(jasmineBrowser.server({port: 8888}));
});
gulp.start('tests');