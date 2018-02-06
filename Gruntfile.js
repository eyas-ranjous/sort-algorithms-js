'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            options: {
                reporter: require('jshint-stylish'),
                jshintrc: '.jshintrc'
            },
            files: ['./lib/**/*.js', './test/**/*.spec.js', './*.js']
        },

        mochaTest: {
            files: ['./test/**/*.spec.js']
        },

        mocha_istanbul: {
            coverage: {
                src: 'test',
                options: {
                    mask: '**/*.spec.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-mocha-istanbul');

    grunt.registerTask('lint', ['jshint']);
    grunt.registerTask('test', ['mochaTest']);
    grunt.registerTask('coverage', ['mocha_istanbul']);
    grunt.registerTask('build', ['lint', 'coverage']);
};