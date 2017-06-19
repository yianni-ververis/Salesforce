module.exports = function (gulp, plugins, project) {
    return function () {
		project.tasks = project.tasksDefault;
		project.server = project.local2;
		project.url = project.name;
		project.tasks.push('server');
		project.tasks.push('watch'); 
		gulp.run(project.tasks)
	}
}