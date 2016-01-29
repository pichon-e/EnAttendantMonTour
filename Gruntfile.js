module.exports = function(grunt) {

  grunt.initConfig({

    sass: {
      dist: {
        files: [{
          expand:true,
          cwd: 'app/scss',
          src: ['*.scss'],
          dest: 'app/css',
          ext: '.css'
        }]
      }
    },
    watch: {
      css: {
        files: 'app/scss/*.scss',
        tasks: ['sass']
        // options: {
        //   livereload: true,
        // },
      },
    },

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass']);
};
