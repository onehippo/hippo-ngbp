// Grunt build system

module.exports = function (grunt) {
  'use strict';

  /*
  * Load grunt tasks that are in the package.json
  */
  require('load-grunt-tasks')(grunt);

  /*
  * Log execution time of grunt tasks
  */
  require('time-grunt')(grunt);

  /*
  * Initiate grunt config
  */
  grunt.initConfig({
    /*
    * Load in our build configuration file.
    */
    buildConfig: require('./build.config.js'),

    watch: {
      /*
      * By default, we want the Live Reload to work for all tasks; this is
      * overridden in some tasks (like this file) where browser resources are
      * unaffected. It runs by default on port 35729, which your browser
      * plugin should auto-detect.
      */
      options: {
        livereload: true,
        livereloadOnError: false,
        interrupt: true
      },

      /*
       * When these config/build files change, we want to run related tasks but not reload.
       * In fact, when your Gruntfile changes, it will automatically be reloaded!
       */
      jshintrc: {
        options: {
          livereload: false
        },
        files: ['.jshintrc'],
        tasks: ['jshint']
      },

      karmaConf: {
        options: {
          livereload: false
        },
        files: ['karma.conf.js'],
        tasks: ['karma:unit:run']
      },

      protractorConf: {
        options: {
          livereload: false
        },
        files: ['protractor.conf.js'],
        tasks: ['protractor']
      },

      gruntfile: {
        options: {
          livereload: false
        },
        files: ['Gruntfile.js', 'build.config.js'],
        tasks: ['jshint:gruntfile']
      },

      /*
      * When our JavaScript source files change, we want to lint them and
      * run our unit tests.
      */
      jssrc: {
        files: [
          '<%= buildConfig.js %>',
          '!<%= buildConfig.unit %>',
          '!<%= buildConfig.e2e %>'
        ],
        tasks: ['jshint:src', 'karma:unit:run']
      },

      /*
      * When a JavaScript unit test file changes, we only want to lint it and
      * run the unit tests. We don't want to do any live reloading.
      */
      jsunit: {
        options: {
          livereload: false
        },
        files: ['<%= buildConfig.unit %>'],
        tasks: ['jshint:unit', 'karma:unit:run']
      },

      /*
       * When a JavaScript e2e test file changes, we only want to lint it and
       * run the tests. We don't want to do any live reloading.
       */
      jse2e: {
        options: {
          livereload: false
        },
        files: ['<%= buildConfig.e2e %>'],
        tasks: ['jshint:e2e', 'protractor']
      },

      /*
      * When an asset changes, we dont need to run any tasks,
      * but we want to do a live reload.
      */
      assets: {
        files: ['<%= buildConfig.assets %>']
      },

      /*
      * When the LESS files change, we need to compile them, but not live reload.
      */
      less: {
        options: {
          livereload: false
        },
        files: ['<%= buildConfig.less %>'],
        tasks: ['less:src' ]
      },

      /*
      * When the CSS files change, we just want to live reload.
      */
      css: {
        files: ['<%= buildConfig.src_dir %>/assets/main.css']
      },

      /*
      * When our templates change, we only rewrite the template cache.
      */
      tpls: {
        files: ['<%= buildConfig.tpl %>'],
        tasks: ['html2js']
      },

      index: {
        files: ['<%= buildConfig.index %>']
      }
    },

    /*
    * `jshint` defines the rules of our linter as well as which files we
    * should check. This file, all javascript sources, and all our unit tests
    * are linted based on the policies listed in `.jshintrc`.
    */
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: ['Gruntfile.js'],
      src: ['<%= buildConfig.js %>'],
      unit: ['<%= buildConfig.unit %>'],
      e2e: ['<%= buildConfig.e2e %>']
    },

    /*
    * The Karma configurations
    */
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: false,
        background: true
      },
      single: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },

    /*
     * Protractor is used for e2e tests, it will fire up a
     * selenium server with webdriver and a chrome browser (by default)
     * and then run the *.e2e.js test files.
     */
    protractor: {
      options: {
        configFile: 'protractor.conf.js'
      },
      run: {}
    },

    /*
    * `grunt-contrib-less` handles our LESS compilation and uglification automatically.
    * Only our `main.less` file is included in compilation; all other files
    * must be imported from this file.
    */
    less: {
      src: {
        files: {
          '<%= buildConfig.src_dir %>/assets/main.css': '<%= buildConfig.mainless %>'
        }
      }
    },

    /*
    * HTML2JS is a Grunt plugin that takes all of your template files and
    * places them into JavaScript files as strings that are added to
    * AngularJS's template cache.
    */
    html2js: {
      src: {
        options: {
          module: '<%= buildConfig.jstplModule %>',
          base: '<%= buildConfig.src_dir %>/modules',
          useStrict: true,
          htmlmin: {
            collapseWhitespace: true,
            collapseBooleanAttributes: true
          }
        },
        src: [ '<%= buildConfig.tpl %>' ],
        dest: '<%= buildConfig.jstpl %>'
      }
    },

    /*
    * The directories/files to delete when `grunt clean` is executed.
    */
    clean: {
      dist: '<%= buildConfig.dist_dir %>',
      src: [
        '<%= buildConfig.src_dir %>/assets/main.css',
        '<%= buildConfig.jstpl %>'
      ],
      tmp: '<%= buildConfig.tmp_dir %>'
    },

    /*
    * Directly copy files/folders to destinations.
    */
    copy: {
      dist: {
        files: [
          {
            src: '<%= buildConfig.src_dir %>/index.html',
            dest: '<%= buildConfig.dist_dir %>/index.html'
          }
        ]
      }
    },

    /*
    * Minify html files
    */
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          '<%= buildConfig.dist_dir %>/index.html': '<%= buildConfig.dist_dir %>/index.html'
        }
      }
    },

    /*
    * CSSmin configuration to be picked up by cssmin configuration
    * generated by useminPrepare
    */
    cssmin: {
      options: {
        keepSpecialComments: 0
      }
    },

    /*
    * useminPrepare will look through the build comments in the source html
    * and then generate the grunt configuration based on those comments.
    */
    useminPrepare: {
      options: {
        dest: '<%= buildConfig.dist_dir %>',
        staging: '<%= buildConfig.tmp_dir %>'
      },
      html: '<%= buildConfig.index %>'
    },

    /*
    * filerev will set revision numbers on the specified files.
    */
    filerev: {
      assets: {
        src: ['<%= buildConfig.dist_dir %>/assets/**/*.{css,js}']
      }
    },

    /*
    * Usemin will rewrite src references to files based on
    * the generated configuration by useminPrepare and filerev
    * in order to use the optimized and revved files.
    */
    usemin: {
      options: {
        assetsDirs: ['<%= buildConfig.dist_dir %>']
      },
      html: ['<%= buildConfig.dist_dir %>/index.html']
    },

    /*
    * Connect sets up a server to view the application in.
    * This can be used to develop the application or
    * to view the distribution version of the application.
    */
    connect: {
      options: {
        port: 9000,
        open: 'http://localhost:9000/#/'
      },
      dev: {
        options: {
          livereload: true,
          base: '<%= buildConfig.src_dir %>'
        }
      },
      dist: {
        options: {
          keepalive: true,
          base: '<%= buildConfig.dist_dir %>'
        }
      }
    }
  });

  /*
  * Register extra grunt tasks.
  */
  grunt.registerTask('build:src', 'Build for development', [
    'clean:src',
    'html2js',
    'jshint',
    'less:src'
  ]);

  grunt.registerTask('build:dist', 'Build for production', [
    'clean',
    'html2js',
    'jshint',
    'less',
    'copy:dist',
    'useminPrepare',
    'concat:generated',
    'cssmin:generated',
    'uglify:generated',
    'filerev',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('server', 'Setup environment for development', [
    'build:src',
    'connect:dev',
    'karma:unit:start',
    'watch'
  ]);

  grunt.registerTask('server:dist', 'View the application as on production', [
    'karma:single',
    'build:dist',
    'connect:dist',
    'protractor:run'
  ]);
};
