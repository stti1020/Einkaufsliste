/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
	

	
    grunt.initConfig({
		
		'http-server': {
 
			'dev': {
	 
				// the server root directory 
				root: "app/.",
	 
				// the server port 
				// can also be written as a function, e.g. 
				// port: function() { return 8282; } 
				port: 8282,
	 
						  // Tell grunt task to open the browser 
				openBrowser : true,
	 
				// customize url to serve specific pages 
				customPages: {
					"/readme": "README.md",
					"/readme.html": "README.html"
				}
	 
			}
 
		}
    });

	grunt.loadNpmTasks('grunt-http-server');
};