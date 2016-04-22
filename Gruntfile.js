module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			options: {
				reporter: require('jshint-stylish')
			},
			build: ['Grunfile.js']
		},

		uglify: {
			options: {
				banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
			},
			build: {
				files: [
				  {
				    expand: true,     // Enable dynamic expansion.
				    cwd: 'src/assets/js/',      // Src matches are relative to this path.
				    src: ['*.js'], // Actual pattern(s) to match.
				    dest: 'dist/assets/js/',   // Destination path prefix.
				    ext: '.min.js',   // Dest filepaths will have this extension.
				    extDot: 'first'   // Extensions in filenames begin after the first dot
				  },
				],
			}
		},
		cssmin: {
			options: {
				banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n/*\n'
			},
			build: {
		      files: [
		        {
		          expand: true,     // Enable dynamic expansion.
		          cwd: 'src/assets/css/',      // Src matches are relative to this path.
		          src: ['*.css'], // Actual pattern(s) to match.
		          dest: 'dist/assets/css/',   // Destination path prefix.
		          ext: '.min.css',   // Dest filepaths will have this extension.
		          extDot: 'first'   // Extensions in filenames begin after the first dot
		        },
		      ],
			}
		},
		htmlmin: {
		    dist: {
		      options: {
		        removeComments: true,
		        collapseWhitespace: true
		      },
		      files: [
		        {
		          expand: true,     // Enable dynamic expansion.
		          cwd: 'src/',      // Src matches are relative to this path.
		          src: ['*.html'], // Actual pattern(s) to match.
		          dest: 'dist/',   // Destination path prefix.
		          ext: '.html',   // Dest filepaths will have this extension.
		          extDot: 'first'   // Extensions in filenames begin after the first dot
		        },
		      ],
		    },
		},
		imagemin: {                          // Task
		  dynamic: {                         // Another target
		    files: [{
		      expand: true,                  // Enable dynamic expansion
		      cwd: 'src/assets/img/',                   // Src matches are relative to this path
		      src: ['*.{png,jpg,gif}'],   // Actual patterns to match
		      dest: 'dist/assets/img/'                  // Destination path prefix
		    }]
		  }
		},
		watch: {
			stylesheets: {
				files: 'src/assets/css/*.css',
				tasks: ['cssmin']
			},
			html: {
				files: 'src/*.html',
				tasks: ['htmlmin']
			},
			scripts: {
				files: 'src/**/*.js',
				tasks: ['jshint', 'uglify']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.registerTask('default', ['jshint', 'cssmin', 'uglify', 'imagemin' , 'htmlmin', 'watch']);

};