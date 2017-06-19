module.exports = function (gulp, plugins, project) {
    return function () {
		return gulp.src([
			'src/js/vendor/domReady/domReady.js',
			'src/js/vendor/tether/dist/js/tether.min.js', // for bootstrap 4 to work
			'src/js/vendor/bootstrap/dist/js/bootstrap.min.js',
			'src/js/vendor/angular-ui-router/release/angular-ui-router.min.js'
		])
		// .pipe(plugins.uglify()) // MInify
		// .pipe(plugins.rename({ extname: '.min.js' }))
		.pipe(gulp.dest( project.dist+'js/vendor/'))
	}
}