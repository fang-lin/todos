/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */
module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    karma: {
      options: {
        configFile: 'test/unit/karma.conf.js',
        reporters: ['progress', 'coverage']
      },
      silent: {
        singleRun: true,
        browsers: ['PhantomJS']

      },
      all: {
        singleRun: true,
        browsers: ['Chrome', 'Firefox']
      },
      debug: {
        singleRun: false,
        browsers: ['Chrome']
      }
    },
    protractor: {
      options: {
        keepAlive: true,
        noColor: false,
        args: {}
      },
      all: {
        options: {
          configFile: 'test/e2e/protractor.conf.js',
          args: {}
        }
      }
    },
    shell: {
      updateWebDriver: {
        options: {
          stdout: true
        },
        command: 'node node_modules/grunt-protractor-runner/node_modules/protractor/bin/webdriver-manager update'
      }
    }
  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-protractor-runner');
}
;
