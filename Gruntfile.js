module.exports = function(grunt) {
  grunt.initConfig({
    webpack: {
      shit: {
        entry: './out/app.js',
        output: {
          path: './out/',
          filename: 'app.js'
        }
      }
    },
    watch: {
      files: ["js/**/*.js"],
      tasks: ['copy','react', 'webpack']
    },
    uglify: {
      build: {
        files: {
          'out/app.js': ['out/app.js']
        }
      }
    },
    copy: {
      css: {
        expand: true,
        cwd: './node_modules',
        dest: './out',
        flatten: true,
        filter: 'isFile',
        src: [
          './bootstrap/dist/css/bootstrap.min.css',
          './bootstrap/dist/css/bootstrap-theme.min.css'
        ]
      }
    },
    react: {
      jsx: {
        files: [{
          expand: true,
          cwd: './js', // Source Directory
          src: ['**/*.jsx','**/*.js'], // Files to compile
          dest: './out', // Destination dir after compile
          ext: '.js'
        }]
      }
    }

  });

  // Load the npm installed tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-react');

  // The default tasks to run when you type: grunt
  grunt.registerTask('default', ['copy', 'react', 'webpack','uglify']);
};