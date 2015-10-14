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
      src: ['<%= cfg.src.js %>'],
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
      single: {
        singleRun: true
      },
      debug: {
        autoWatch: true,
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
     * CSSLint helps discover faulty or unwanted css constructions based on
     * policies listed in csslintrc.json. The options in csslintrc
     * are configured based on the values:
     *   - false, throws no errors for this option
     *   - 1, throws warnings for this option, doesnt fail the build
     *   - 2, throws error for this options, fails the build
     */
    csslint: {
      main: {
        options: {
          csslintrc: './.csslintrc'
        },
        src: ['<%= cfg.tmp.css %>']
      },
      api: {
        options: {
          csslintrc: './.csslintrc'
        },
        src: ['<%= cfg.apidist.css %>']
      }
    },

    /*
     * `grunt-sass` handles our Sass compilation and uglification automatically.
     * Only our `main.scss` file is included in compilation; all other files
     * must be imported from this file.
     */
    sass: {
      main: {
        options: {
          sourceMap: true,
        },
        files: {
          '<%= cfg.tmp.css %>': '<%= cfg.src.indexStyles %>'
        }
      },
      api: {
        options: {
          sourceMap: true,
        },
        files: {
          '<%= cfg.apidist.css %>': '<%= cfg.apisrc.indexStyles %>'
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
      main: {
        files: [{
            expand: true,
          cwd: '<%= cfg.src.imageDir %>',
            src: ['<%= cfg.images %>'],
          dest: '<%= cfg.src.imageDir %>'
        }]
      }
    },

    /*
     * HTML2JS is a Grunt plugin that takes all of your template files and
     * places them into JavaScript files as strings that are added to
     * AngularJS's template cache.
     */
    html2js: {
      main: {
        options: {
          module: '<%= cfg.src.jstplModule %>',
          singleModule: true,
          base: '<%= cfg.src_dir %>',
          useStrict: true,
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
          htmlmin: {
            collapseWhitespace: true,
            collapseBooleanAttributes: true
          }
        },
        src: ['<%= cfg.apisrc.tpl %>'],
        dest: '<%= cfg.apitmp.jstplFile %>'
      }
    },

    /*
     * The concat task concatenates the source files in the given order
     * (or alphabetically if its a glob pattern) to the provided destination file.
     */
    concat: {
      main: {
        options: {
          sourceMap: true
        },
        src: [
          '<%= cfg.src.indexJs %>',
          '<%= cfg.tmp.jstplFile %>',
          '<%= cfg.src.js %>'
        ],
        dest: '<%= cfg.tmp.js %>'
      },
      api: {
        options: {
          sourceMap: true
        },
        src: [
          '<%= cfg.apisrc.indexJs %>',
          '<%= cfg.apitmp.jstplFile %>',
          '<%= cfg.apisrc.js %>'
        ],
        dest: '<%= cfg.apidist.js %>'
      }
    },

    /*
     * ngAnnotate will transform provided javascript files to add
     * angular annotations for injection.
     */
    ngAnnotate: {
      main: {
        options: {
          singleQuotes: true,
          sourceMap: true
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
      bower_images: {
        files: [{
          expand: true,
          flatten: true,
          cwd: '<%= cfg.bower_dir %>',
          src: '<%= cfg.src.bower_images %>',
          dest: '<%= cfg.dist.images %>'
        }]
      },
      bower_fonts: {
        files: [{
          expand: true,
          flatten: true,
          cwd: '<%= cfg.bower_dir %>',
          src: '<%= cfg.src.bower_fonts %>',
          dest: '<%= cfg.dist.fonts %>'
        }]
      },
      main: {
        files: [{
            expand: true,
            cwd: '<%= cfg.src_dir %>',
            src: '<%= cfg.images %>',
            dest: '<%= cfg.dist_dir %>'
        }]
      }
          },

    /*
     * Replaces patterns in the given files
     */
    replace: {
      main: {
        options: {
          patterns: '<%= cfg.replacePatterns %>',
          usePrefix: false
        },
        files: [{
            src: '<%= cfg.src.indexHtml %>',
            dest: '<%= cfg.dist.indexHtml %>'
        }]
      }
    },

    /*
     * Minify html files
     */
    htmlmin: {
      main: {
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
      main: {
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
      proxies: '<%= cfg.proxies %>',
      dev: {
        options: {
          livereload: true,
          base: ['<%= cfg.src_dir %>', '.'],
          middleware: function (connect, options, middlewares) {
            var proxy = require('grunt-connect-proxy/lib/utils').proxyRequest;
            middlewares.unshift(proxy);
            return middlewares;
          }
        }
      },
      dist: {
        options: {
          keepalive: true,
          base: ['<%= cfg.dist_dir %>'],
          middleware: function (connect, options, middlewares) {
            var compression = require('compression');
            var proxy = require('grunt-connect-proxy/lib/utils').proxyRequest;
            middlewares.unshift(compression());
            middlewares.unshift(proxy);
            return middlewares;
          }
        }
      }
    },

    /*
     * Watch files and run tasks on changes
     */
    watch: {
      options: {
        spawn: false,
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
        tasks: ['karma:single']
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
        options: {
          livereload: true
        },
        files: [
          '<%= cfg.src.js %>'
        ],
        tasks: [
          'jshint:src',
          'concat:main',
          'ngAnnotate:main',
          'karma:single'
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
          'jshint:src',
          'concat:main',
          'ngAnnotate:main',
          'karma:single'
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
       * When the Sass files change, we need to compile them, but not live reload.
       */
      sass: {
        options: {
          livereload: true,
          outputStyle: 'expanded'
        },
        files: ['<%= cfg.src.styles %>'],
        tasks: [
          'sass:main',
          'csslint:main',
          'autoprefixer:main'
        ]
      },

      /*
       * When our templates change, we only rewrite the template cache.
       */
      tpls: {
        options: {
          livereload: true
        },
        files: [
          '<%= cfg.src.tpl %>',
          '!<%= cfg.src.indexHtml %>'
        ],
        tasks: [
          'html2js:main',
          'concat:main',
          'ngAnnotate:main'
        ]
      },

      /*
       * Other files that should trigger a livereload
       */
      livereload: {
        options: {
          livereload: true
        },
        files: [
          '<%= cfg.src.indexHtml %>',
          '<%= cfg.bower_reload_dependencies %>'
        ]
      }
    }
  });

  /*
   * Register extra grunt tasks.
   */
  grunt.registerTask('build', 'Build for development', [
    'clean',
    'html2js:main',
    'jshint',
    'sass:main',
    'csslint:main',
    'autoprefixer:main',
    'imagemin',
    'concat:main',
    'ngAnnotate:main'
  ]);

  grunt.registerTask('build:dist', 'Build for production', [
    'clean',
    'html2js',
    'jshint',
    'sass',
    'csslint',
    'autoprefixer',
    'imagemin',
    'concat',
    'ngAnnotate',
    'copy',
    'replace',
    'useminPrepare',
    'concat',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'htmlmin',
    'clean:tmp'
  ]);

  grunt.registerTask('server', 'Setup environment for development', [
    'build',
    'configureProxies:dev',
    'connect:dev',
    'watch'
  ]);

  grunt.registerTask('server:dist', 'View the application as on production', [
    'build:dist',
    'configureProxies:dist',
    'connect:dist'
  ]);
};
