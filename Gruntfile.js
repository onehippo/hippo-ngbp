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
        files: ['karma.conf.js'],
        tasks: ['karma:continuous:run']
      },

      protractorConf: {
        files: ['protractor.conf.js'],
        tasks: ['protractor']
      },

      gruntfile: {
        options: {
          reload: true
        },
        files: ['Gruntfile.js', 'build.config.js'],
        tasks: ['jshint:gruntfile']
      },

      /*
       * When our JavaScript source files change, we want to lint them and
       * run our unit tests.
       */
      jssrc: {
        files: ['<%= cfg.jssrc %>'],
        tasks: ['jshint:src', 'concat:js']
      },

      /*
       * When a JavaScript unit test file changes, we only want to lint it and
       * run the unit tests. We don't want to do any live reloading.
       */
      jsunit: {
        files: ['<%= cfg.src_dir %>/<%= cfg.unit %>'],
        tasks: ['jshint:unit', 'karma:continuous:run']
      },

      /*
       * When a JavaScript e2e test file changes, we only want to lint it and
       * run the tests. We don't want to do any live reloading.
       */
      jse2e: {
        files: ['<%= cfg.src_dir %>/<%= cfg.e2e %>'],
        tasks: ['jshint:e2e', 'protractor']
      },

      /*
       * When images are changes optimize them.
       */
      images: {
        files: ['<%= cfg.src_dir %>/<%=cfg.images %>'],
        tasks: ['imagemin']
      },

      /*
       * When the LESS files change, we need to compile them, but not live reload.
       */
      less: {
        files: ['<%= cfg.src_dir %>/<%= cfg.less %>'],
        tasks: ['lesslint', 'less:src', 'autoprefixer']
      },

      /*
       * When our templates change, we only rewrite the template cache.
       */
      tpls: {
        files: ['<%= cfg.src_dir %>/<%= cfg.tpl %>'],
        tasks: ['html2js', 'concat:js', 'uglify']
      },

      livereload: {
        options: {
          livereload: true
        },
        files: [
          '<%= cfg.compiled_dir %>/**',
          '!<%= cfg.compiled_dir %>/**/*.*.map',
          '<%= cfg.jssrc %>',
          '<%= cfg.src_dir %>/index.html'
        ]
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
      src: ['<%= cfg.jssrc %>'],
      unit: ['<%= cfg.src_dir %>/<%= cfg.unit %>'],
      e2e: ['<%= cfg.src_dir %>/<%= cfg.e2e %>']
    },

    /*
     * The Karma configurations
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
      }
    },

    /*
     * Protractor is used for e2e tests, it will fire up a
     * selenium server with webdriver and a chrome browser (by default)
     * and then run the *.e2e.js test files.
     */
    protractor: {
      options: {
        configFile: 'protractor.config.js'
      },
      run: {}
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
        imports: '<%= cfg.src_dir %>/<%= cfg.less %>',
        csslint: require('./csslintrc.json')
      },
      src: ['<%= cfg.src_dir %>/<%= cfg.mainless %>']
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
          sourceMapFilename: '<%= cfg.compiled_dir %>/css/main.css.map',
          sourceMapURL: 'main.css.map',
          outputSourceFiles: true
        },
        files: {
          '<%= cfg.compiled_dir %>/css/main.css': '<%= cfg.src_dir %>/<%= cfg.mainless %>'
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
        src: '<%= cfg.compiled_dir %>/css/main.css',
        dest: '<%= cfg.compiled_dir %>/css/main.css'
      }
    },

    /*
     * CSSmin minifies the provided css files.
     */
    cssmin: {
      compiled: {
        files: {
          '<%= cfg.compiled_dir %>/css/main.min.css': ['<%= cfg.compiled_dir %>/css/main.css']
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
            cwd: '<%= cfg.image_dir %>',
            src: ['<%= cfg.images %>'],
            dest: '<%= cfg.image_dir %>'
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
          base: '<%= cfg.src_dir %>',
          useStrict: true,
          htmlmin: {
            collapseWhitespace: true,
            collapseBooleanAttributes: true
          }
        },
        src: ['<%= cfg.src_dir %>/<%= cfg.tpl %>'],
        dest: '<%= cfg.src_dir %>/<%= cfg.jstpl %>'
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
          '<%= cfg.mainjs %>',
          '<%= cfg.jstpl %>',
          '<%= cfg.jssrc %>'
        ],
        dest: '<%= cfg.compiled_dir %>/js/main.js'
      }
    },

    /*
     * Uglify minifies the provides js files.
     */
    uglify: {
      compiled: {
        files: {
          '<%= cfg.compiled_dir %>/js/main.min.js': ['<%= cfg.compiled_dir %>/js/main.js']
        }
      }
    },

    /*
     * The directories/files to delete when `grunt clean` is executed.
     */
    clean: {
      compiled: '<%= cfg.compiled_dir %>',
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
            cwd: '<%= cfg.image_dir %>',
            src: '<%= cfg.images %>',
            dest: '<%= cfg.dist_dir %>/images/'
          },
          {
            src: '<%= cfg.src_dir %>/index.html',
            dest: '<%= cfg.dist_dir %>/index.html'
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
          '<%= cfg.dist_dir %>/index.html': '<%= cfg.dist_dir %>/index.html'
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
      html: '<%= cfg.dist_dir %>/index.html'
    },

    /*
     * filerev will set revision numbers on the specified files.
     */
    filerev: {
      dist: {
        src: '<%= cfg.dist_dir %>/**/*.min.{css,js}'
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
      html: ['<%= cfg.dist_dir %>/index.html']
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
    'concat:js'
  ]);

  grunt.registerTask('build:dist', 'Build for production', [
    'build',
    'copy',
    'useminPrepare',
    'concat',
    'cssmin',
    'uglify',
    'filerev',
    'usemin'
  ]);

  grunt.registerTask('server', 'Setup environment for development', [
    'build',
    'connect:dev',
    // 'karma:continuous:start',
    'watch'
  ]);

  grunt.registerTask('server:dist', 'View the application as on production', [
    // 'karma:single',
    'build:dist',
    'connect:dist'
    // 'protractor:run'
  ]);
};
