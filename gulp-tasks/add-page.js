var fs = require('fs');
module.exports = function (gulp, plugins, project) {
	let page = plugins.util.env.page
	console.log(page)
	// Make sure that we have a valid page name
	if (page) {
		// Add the new page into the Schema
		project.pages.push(page)
		// Export the project settings with the new page
		fs.writeFile('./project2.json', JSON.stringify(project, null, "\t"), function(err) {
			if(err) { return console.log(err); }
			console.log("Project file was saved!");
		});
		// Copy the html for the page
		gulp.src("./src/templates/controllers/temp.html")
		.pipe(plugins.rename(`views/${page}.html`))
		.pipe(gulp.dest("./src"));
		// Create the controller for the page
		gulp.src("./src/templates/controllers/temp.js")
		.pipe(plugins.replace(/@@ph-page/g, page))
		.pipe(plugins.rename(`js/controllers/${page}.js`))
		.pipe(gulp.dest("./src"));
	}
}