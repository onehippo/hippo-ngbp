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
          'systemjs',
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
          'systemjs',
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
      src: {
        options: {
          imports: '<%= cfg.src.styles %>',
          csslint: require('./csslintrc.json')
        },
        src: ['<%= cfg.src.mainStyles %>']
      },
      api: {
        options: {
          imports: '<%= cfg.apisrc.styles %>',
          csslint: require('./csslintrc.json')
        },
        src: ['<%= cfg.apisrc.mainStyles %>']
      }
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
          sourceMapFilename: '<%= cfg.tmp.cssSourceMap %>',
          sourceMapURL: '<%= cfg.cssSourceMap %>',
          outputSourceFiles: true
        },
        files: {
          '<%= cfg.tmp.css %>': '<%= cfg.src.mainStyles %>'
        }
      },
      api: {
        options: {
          sourceMap: true,
          sourceMapFilename: '<%= cfg.apidist.cssSourceMap %>',
          sourceMapURL: '<%= cfg.cssSourceMap %>',
          outputSourceFiles: true
        },
        files: {
          '<%= cfg.apidist.css %>': '<%= cfg.apisrc.mainStyles %>'
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
      main: {
        src: '<%= cfg.tmp.css %>',
        dest: '<%= cfg.tmp.css %>'
      },
      api: {
        src: '<%= cfg.apidist.css %>',
        dest: '<%= cfg.apidist.css %>'
      }
    },

    /*
     * CSSmin minifies the provided css files.
     */
    cssmin: {
      api: {
        files: {
          '<%= cfg.apidist.cssmin %>': ['<%= cfg.apidist.css %>']
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
            cwd: '<%= cfg.src_dir %>',
            src: ['<%= cfg.images %>'],
            dest: '<%= cfg.src_dir %>'
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
          module: '<%= cfg.src.jstplModule %>',
          singleModule: true,
          base: '<%= cfg.src_dir %>',
          useStrict: true,
          fileHeaderString: 'import angular from "angular"; \n export default',
          htmlmin: {
            collapseWhitespace: true,
            collapseBooleanAttributes: true
          }
        },
        src: ['<%= cfg.src.tpl %>', '!<%= cfg.src.indexHtml %>'],
        dest: '<%= cfg.tmp.jstplFile %>'
      },
      api: {
        options: {
          module: '<%= cfg.apisrc.jstplModule %>',
          singleModule: true,
          base: '<%= cfg.apisrc_dir %>',
          useStrict: true,
          fileHeaderString: 'import angular from "angular"; \n export default',
          htmlmin: {
            collapseWhitespace: true,
            collapseBooleanAttributes: true
          }
        },
        src: ['<%= cfg.apisrc.tpl %>'],
        dest: '<%= cfg.tmp.apiJstplFile %>'
      }
    },

    /*
     * ngAnnotate will transform provided javascript files to add
     * angular annotations for injection.
     */
    ngAnnotate: {
      main: {
        options: {
          singleQuotes: true
        },
        src: ['<%= cfg.tmp.js %>'],
        dest: '<%= cfg.tmp.js %>'
      },
      api: {
        options: {
          singleQuotes: true
        },
        src: ['<%= cfg.apidist.js %>'],
        dest: '<%= cfg.apidist.js %>'
      }
    },

    /*
     * Uglify minifies the provides js files.
     */
    uglify: {
      api: {
        files: {
          '<%= cfg.apidist.jsmin %>': ['<%= cfg.apidist.js %>']
        }
      }
    },

    /*
     * The directories/files to delete when `grunt clean` is executed.
     */
    clean: {
      api: '<%= cfg.apidist_dir %>',
      tmp: '<%= cfg.tmp_dir %>',
      dist: '<%= cfg.dist_dir %>',
      docs: '<%= cfg.docs_dir %>'
    },

    /*
     * Directly copy files/folders to destinations.
     */
    copy: {
      dist: {
        files: [
          {
            expand: true,
            cwd: '<%= cfg.src_dir %>',
            src: '<%= cfg.images %>',
            dest: '<%= cfg.dist_dir %>'
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
        dest: '<%= cfg.dist_dir %>',
        staging: '<%= cfg.tmp_dir %>'
      },
      html: '<%= cfg.src.indexHtml %>'
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
        assetsDirs: ['<%= cfg.dist_dir %>']
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
        port: 9000
      },
      dev: {
        options: {
          livereload: true,
          base: ['<%= cfg.src_dir %>', '.']
        }
      },
      dist: {
        options: {
          keepalive: true,
          base: ['<%= cfg.dist_dir %>']
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
    'systemjs',
    'ngAnnotate'
  ]);

  grunt.registerTask('build:dist', 'Build for production', [
    'build',
    'karma:single',
    'copy',
    'useminPrepare',
    'concat:generated',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'clean:tmp'
  ]);

  grunt.registerTask('server', 'Setup environment for development', [
    'build',
    'connect:dev',
    'karma:continuous:start',
    'watch'
  ]);

  grunt.registerTask('server:dist', 'View the application as on production', [
    'build:dist',
    'connect:dist'
  ]);

  grunt.registerTask('systemjs', 'Build self executing functions using systemjs', function () {
    var cfg = require('./build.config.js');
    var Builder = require('systemjs-builder');
    var builder = new Builder();
    var moduleName = cfg.src.entryModule;
    var dest = cfg.tmp.js;
    var options = {
      sourceMaps: true,
      config: require('./system.config.js')
    };
    var done = this.async();

    builder.buildSFX(moduleName, dest, options).then(function () {
      done();
    }, function (message) {
      grunt.log.error(message);
      done(false);
    });
  });
};
