module.exports = function (gulp, plugins, project) {
    return function () {
		if (!plugins.util.env.prod && !plugins.util.env.stag) {
			gulp.watch('src/index.html', ['html']);
			gulp.watch('src/views/*.html', ['html']);
			gulp.watch('src/css/*.css', ['client-css']);
			gulp.watch('src/js/directives/**/*.*', ['client-css','directives','html']);
			gulp.watch('src/js/controllers/*.js', ['controllers']);
			gulp.watch('src/js/services/*.js', ['services']);
			gulp.watch('src/js/lib/*.js', ['lib']);
			gulp.watch('src/img/*', ['img']);
			console.log('Waiting for changes...')
		}
	}
}