module.exports = function (gulp, plugins, project) {
    return function () {
		// console.log(project.pages)
		let routes = '';
		for (let page of project.pages) {
			routes += `
				.state('index.${page}', {
					url: "/${page}/",
					parent: 'index',
					views: {
						'main@': { 
							templateUrl: "views/${page}.html",
							controller: 'controller.${page}' 
						},
					}
				})
			`;
		}
		return gulp.src([
			'src/js/lib/main.js',
			'src/js/lib/routes.js',
			'src/js/lib/ga.js',
		])
		// .pipe(plugins.replace(/@@ph-routes/g, routes))
		.pipe(plugins.eslint({configFile: 'eslint.json'}))
		.pipe(plugins.eslint.format())
		.pipe(plugins.concat('lib.js')) // Combine
		.pipe(plugins.replace(/@@ph-scriptsUrl/g, project.server.scriptsUrl))
		.pipe(plugins.replace(/@@ph-host/g, project.server.host))
		.pipe(plugins.replace(/@@pt-base/g, project.server.baseUrl))
		.pipe(plugins.uglify()) // Minify
		.pipe(gulp.dest(project.dist+'js/')) // Save to
	}
}