/* reduce for only serving the presentation */

/* global module:false */
module.exports = function(grunt) {

	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		connect: {
			server: {
				options: {
					port: 8000,
					base: '.'
				}
			}
		},

		watch: {
			main: {
				files: [ 'Gruntfile.js', 'js/reveal.js', 'css/reveal.css' ],
				tasks: 'default'
			}
		}

	});

	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-connect' );

	// Default task
	grunt.registerTask( 'default', [ 'serve' ] );

	// Serve presentation locally
	grunt.registerTask( 'serve', [ 'connect', 'watch' ] );

};
