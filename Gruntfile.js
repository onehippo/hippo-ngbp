// Grunt build system

'use strict';

module.exports = function (grunt) {
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
    cfg: require('./build.config.js'),

    watch: {
      options: {
        spawn: false,
        interrupt: true,
        livereloadOnError: false
      },

      /*
       * When these config/build files change, we want to run related tasks but not reload.
       * In fact, when your Gruntfile changes, it will automatically be reloaded!
       */
      jshintrc: {
        files: ['.jshintrc'],
        tasks: ['jshint']
      },

      karmaConf: {
        files: ['<%= cfg.karma %>'],
        tasks: ['karma:continuous:run']
      },

      protractorConf: {
        files: ['<%= cfg.protractor %>'],
        tasks: ['protractor']
      },

      gruntfile: {
        files: [
          'Gruntfile.js',
          'build.config.js'
        ],
        tasks: ['jshint:gruntfile']
      },

      /*
       * When our JavaScript source files change, we want to lint them and
       * run our unit tests.
       */
      jssrc: {
        options: {livereload: true},
        files: [
          '<%= cfg.src.js %>',
          'system.config.js'
        ],
        tasks: [
          'jshint:src',
          'karma:continuous:run',
          'concat:js',
          'ngAnnotate'
        ]
      },

      /*
       * When a JavaScript unit test file changes, we only want to lint it and
       * run the unit tests. We don't want to do any live reloading.
       */
      jsunit: {
        files: ['<%= cfg.src.unit %>'],
        tasks: [
          'jshint:unit',
          'karma:continuous:run'
        ]
      },

      /*
       * When a JavaScript e2e test file changes, we only want to lint it and
       * run the tests. We don't want to do any live reloading.
       */
      jse2e: {
        files: ['<%= cfg.src.e2e %>'],
        tasks: [
          'jshint:e2e',
          'protractor'
        ]
      },

      /*
       * When images are changes optimize them.
       */
      images: {
        files: ['<%= cfg.src.images %>'],
        tasks: ['imagemin']
      },

      /*
       * When the LESS files change, we need to compile them, but not live reload.
       */
      less: {
        options: {livereload: true},
        files: ['<%= cfg.src.styles %>'],
        tasks: [
          'lesslint',
          'less',
          'autoprefixer'
        ]
      },

      /*
       * When our templates change, we only rewrite the template cache.
       */
      tpls: {
        options: {livereload: true},
        files: [
          '<%= cfg.src.tpl %>',
          '!<%= cfg.src.indexHtml %>'
        ],
        tasks: [
          'html2js',
          'concat:js',
          'ngAnnotate'
        ]
      },

      /*
       * Other files that should trigger a livereload
       */
      livereload: {
        options: {livereload: true},
        files: ['<%= cfg.src.indexHtml %>']
      }
    },

    /*
     * `jshint` defines the rules of our linter as well as which files we
     * should check. This file, all javascript sources, and all our unit tests
     * are linted based on the policies listed in `.jshintrc`.
     */
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      gruntfile: ['Gruntfile.js'],
      src: [ '<%= cfg.src.js %>'],
      unit: ['<%= cfg.src.unit %>'],
      e2e: ['<%= cfg.src.e2e %>']
    },

    /*
     * The Karma configurations for unit tests. Debug can be used to
     * fire up a chrome browser and inspect the exact application karma
     * starts up.
     */
    karma: {
      options: {
        configFile: 'karma.config.js'
      },
      continuous: {
        singleRun: false,
        background: true
      },
      single: {
        singleRun: true
      },
      debug: {
        singleRun: false,
        browsers: ['Chrome']
      }
    },

    /*
     * Protractor is used for e2e tests, it will fire up a
     * selenium server with webdriver and a chrome browser (by default)
     * and then run the *.e2e.js test files.
     */
    protractor: {
      run: {
        options: {
          configFile: '<%= cfg.protractor %>'
        }
      }
    },

    /*
     * LESSlint helps discover faulty or unwanted css constructions based on
     * policies listed in csslintrc.json. The options in csslintrc
     * are configured based on the values:
     *   - false, throws no errors for this option
     *   - 1, throws warnings for this option, doesnt fail the build
     *   - 2, throws error for this options, fails the build
     */
    lesslint: {
      options: {
        imports: '<%= cfg.src.styles %>',
        csslint: require('./csslintrc.json')
      },
      src: ['<%= cfg.src.mainStyles %>']
    },

    /*
     * `grunt-contrib-less` handles our LESS compilation and uglification automatically.
     * Only our `main.less` file is included in compilation; all other files
     * must be imported from this file.
     */
    less: {
      main: {
        options: {
          sourceMap: true,
          sourceMapFilename: '<%= cfg.compiled.cssSourceMap %>',
          sourceMapURL: '<%= cfg.cssSourceMap %>',
          outputSourceFiles: true
        },
        files: {
          '<%= cfg.compiled.css %>': '<%= cfg.src.mainStyles %>'
        }
      }
    },

    /*
     * Autoprefixer scans the css for rules that need vendor specific prefixes
     * like -moz-, -webkit-, -ms- or -o-. These are needed for some css features
     * to work in older browsers. The supported browsers are listed in the browsers option.
     */
    autoprefixer: {
      options: {
        browsers: ['last 1 version'],
        map: true
      },
      compiled: {
        src: '<%= cfg.compiled.css %>',
        dest: '<%= cfg.compiled.css %>'
      }
    },

    /*
     * CSSmin minifies the provided css files.
     */
    cssmin: {
      compiled: {
        files: {
          '<%= cfg.compiled.cssmin %>': ['<%= cfg.compiled.css %>']
        }
      }
    },

    /*
     * Imagemin optimizes png, jpg and gif image files.
     * As this configuration shows, we optimize the images in the source dir
     * so we will have optimized files in versioning, and will not need to run
     * the optimization in every build.
     */
    imagemin: {
      src: {
        files: [
          {
            expand: true,
            cwd: '<%= cfg.src.dir %>',
            src: ['<%= cfg.images %>'],
            dest: '<%= cfg.src.dir %>'
          }
        ]
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
          module: '<%= cfg.jstplModule %>',
          singleModule: true,
          base: '<%= cfg.src.dir %>',
          useStrict: true,
          htmlmin: {
            collapseWhitespace: true,
            collapseBooleanAttributes: true
          }
        },
        src: ['<%= cfg.src.tpl %>', '!<%= cfg.src.indexHtml %>'],
        dest: '<%= cfg.src.jstplFile %>'
      }
    },

    /*
     * The concat task concatenates the source files in the given order
     * (or alphabetically if its a glob pattern) to the provided destination file.
     */
    concat: {
      js: {
        options: {
          sourceMap: true
        },
        src: [
          '<%= cfg.src.indexjs %>',
          '<%= cfg.src.jstplFile %>',
          '<%= cfg.src.js %>'
        ],
        dest: '<%= cfg.compiled.js %>'
      }
    },

    /*
     * ngAnnotate will transform provided javascript files to add
     * angular annotations for injection.
     */
    ngAnnotate: {
      compiled: {
        options: {
          singleQuotes: true
        },
        src: ['<%= cfg.compiled.js %>'],
        dest: '<%= cfg.compiled.js %>'
      }
    },

    /*
    * Babel task compiles es6 code to es5 code
    */
    babel: {
      src: {
        files: {
          '<%= cfg.compiled_dir %>/js/main.js': '<%= cfg.compiled_dir %>/js/main.js'
        }
      }
    },

    /*
     * Uglify minifies the provides js files.
     */
    uglify: {
      compiled: {
        files: {
          '<%= cfg.compiled.jsmin %>': ['<%= cfg.compiled.js %>']
        }
      }
    },

    /*
     * The directories/files to delete when `grunt clean` is executed.
     */
    clean: {
      compiled: '<%= cfg.compiled.dir %>',
      tmp: '<%= cfg.tmp.dir %>',
      dist: '<%= cfg.dist.dir %>',
      docs: '<%= cfg.docs %>'
    },

    /*
     * Directly copy files/folders to destinations.
     */
    copy: {
      dist: {
        files: [
          {
            expand: true,
            cwd: '<%= cfg.src.dir %>',
            src: '<%= cfg.images %>',
            dest: '<%= cfg.dist.dir %>'
          },
          {
            src: '<%= cfg.src.indexHtml %>',
            dest: '<%= cfg.dist.indexHtml %>'
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
          '<%= cfg.dist.indexHtml %>': '<%= cfg.dist.indexHtml %>'
        }
      }
    },

    /*
     * useminPrepare will look through the build comments in the source html
     * and then generate the grunt configuration based on those comments.
     */
    useminPrepare: {
      options: {
        dest: '<%= cfg.dist.dir %>',
        staging: '<%= cfg.tmp %>'
      },
      html: '<%= cfg.dist.indexHtml %>'
    },

    /*
     * filerev will set revision numbers on the specified files.
     */
    filerev: {
      dist: {
        src: [
          '<%= cfg.dist.css %>',
          '<%= cfg.dist.js %>'
        ]
      }
    },

    /*
     * Usemin will rewrite src references to files based on
     * the generated configuration by useminPrepare and filerev
     * in order to use the optimized and revved files.
     */
    usemin: {
      options: {
        assetsDirs: ['<%= cfg.dist.dir %>']
      },
      html: ['<%= cfg.dist.indexHtml %>']
    },

    /*
     * Connect sets up a server to view the application in.
     * This can be used to develop the application or
     * to view the distribution version of the application.
     */
    connect: {
      options: {
        port: 9000,
        open: 'http://localhost:9000/'
      },
      dev: {
        options: {
          livereload: true,
          base: ['<%= cfg.src.dir %>', '.']
        }
      },
      dist: {
        options: {
          keepalive: true,
          base: ['<%= cfg.dist.dir %>']
        }
      }
    }
  });

  /*
   * Register extra grunt tasks.
   */
  grunt.registerTask('build', 'Build for development', [
    'clean',
    'html2js',
    'jshint',
    'lesslint',
    'less',
    'autoprefixer',
    'imagemin',
    'concat:js',
    'ngAnnotate'
  ]);

  grunt.registerTask('build:dist', 'Build for production', [
    'build',
    'copy',
    'useminPrepare',
    'concat:generated',
    'cssmin:generated',
    'uglify:generated',
    'filerev',
    'usemin'
  ]);

  grunt.registerTask('server', 'Setup environment for development', [
    'build',
    'connect:dev',
    'karma:continuous:start',
    'watch'
  ]);

  grunt.registerTask('server:dist', 'View the application as on production', [
    'karma:single',
    'build:dist',
    'connect:dist'
  ]);
};
