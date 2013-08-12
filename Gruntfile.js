// Generated on 2013-06-12 using generator-webapp 0.2.3
'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var yeomanConfig = {
        app: 'webapp',
        dist: 'dist'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
            options: {
                nospawn: true
            },
            coffee: {
                files: ['<%= yeoman.app %>/coffee/**/*.coffee'],
                tasks: ['coffee:dist']
            },
            coffeeTest: {
                files: ['test/spec/**/*.coffee'],
                tasks: ['coffee:test']
            },
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    '<%= yeoman.app %>/*.html',
                    '{.tmp,<%= yeoman.app %>}/css/{,*/}*.css',
                    '{.tmp,<%= yeoman.app %>}/js/**/*.js',
                    '<%= yeoman.app %>/img/**/*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                // change this to '0.0.0.0' to access the server from outside
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, yeomanConfig.app)
                        ];
                    }
                }
            },
            test: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'test')
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, yeomanConfig.dist)
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: ['.tmp', '<%= yeoman.app %>/js/']
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/js/**/*.js',
                '!<%= yeoman.app %>/js/libs/*',
                'test/spec/{,*/}*.js'
            ]
        },
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://localhost:<%= connect.options.port %>/index.html']
                }
            }
        },
        coffee: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/coffee',
                    src: '**/*.coffee',
                    dest: '<%= yeoman.app %>/js',
                    ext: '.js'
                }]
            },
            test: {
                files: [{
                    expand: true,
                    cwd: 'test/spec',
                    src: '**/*.coffee',
                    dest: '.tmp/spec',
                    ext: '.js'
                }]
            }
        },
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= yeoman.dist %>/js/**/*.js',
                        '<%= yeoman.dist %>/css/**/*.css',
                        '<%= yeoman.dist %>/img/**/*.{png,jpg,jpeg,gif,webp}',
                        '<%= yeoman.dist %>/css/fonts/*'
                    ]
                }
            }
        },
        useminPrepare: {
            options: {
                dest: '<%= yeoman.dist %>/index.html'
            },
            html: '<%= yeoman.app %>/index.html'
        },
        usemin: {
            options: {
                dirs: ['<%= yeoman.dist %>']
            },
            html: ['<%= yeoman.dist %>/**/*.html'],
            css: ['<%= yeoman.dist %>/css/**/*.css']
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>/img',
                    src: '**/*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.dist %>/img/'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>/img',
                    src: '/**/*.svg',
                    dest: '<%= yeoman.dist %>/img/'
                }]
            }
        },
        cssmin: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/css/main.min.css': [
                        '<%= yeoman.app %>/css/main.css'
                    ]
                }
            }
        },
        uglify: {
            options: {
              mangle: false,
              report: 'gzip'
            },
            build: {
              files: {
                '<%= yeoman.dist %>/js/main.min.js': [
                        '<%= yeoman.app %>/js/libs/jquery.js',
                        '<%= yeoman.app %>/js/libs/bootstrap.js'
                        ]
              }
            }
        },
        htmlmin: {
            dist: {
                options: {
                  removeEmptyAttributes: true,
                    /*removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: '*.html',
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },
        // Put files not handled in other tasks here
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,txt}',
                        '.htaccess',
                        'img/**/*.{webp,gif,png}'
                    ]
                }]
            },
            jsdev: {
                files: [{
                    expand: true,
                    flatten: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>/bower_components/',
                    dest: '<%= yeoman.app %>/js/libs/',
                    src: [
                        'backbone/backbone.js',
                        'bootstrap/docs/assets/js/bootstrap.js',
                        'jquery/jquery.js',
                        'layoutmanager/backbone.layoutmanager.js',
                        'modernizr/modernizr.js',
                        'requirejs/require.js',
                        'underscore/underscore.js'
                    ]
                }]
            },
            cssdev: {
                files: [{
                    expand: true,
                    flatten: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>/bower_components/',
                    dest: '<%= yeoman.app %>/css/',
                    src: [
                        'bootstrap/docs/assets/css/bootstrap.css',
                        'bootstrap/docs/assets/css/bootstrap-responsive.css',
                        'normalize-css/normalize.css'
                    ]
                }]
            },
            imgdev: {
                files: [{
                    expand: true,
                    flatten: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>/bower_components/',
                    dest: '<%= yeoman.app %>/img/',
                    src: [
                        'bootstrap/img/glyphicons-halflings-white.png',
                        'bootstrap/img/glyphicons-halflings.png'
                    ]
                }]
            }
        },
        concurrent: {
            server: [
                'coffee:dist',
                'copy:jsdev',
                'copy:cssdev',
                'copy:imgdev'
            ],
            test: [
                'coffee'
            ],
            dist: [
                'coffee',
                /*'imagemin',
                'svgmin',*/
                'htmlmin'
            ]
        },
        requirejs: {
            compile: {
                options: {
                  name          : 'main',
                  mainConfigFile: '<%= yeoman.app %>/js/config.js',
                  baseUrl       : '<%= yeoman.app %>/js/',
                  optimize      : "uglify",
                  optimizeCss   : "standard",
                  out           : '<%= yeoman.dist %>/js/app.main.js',
                  preserveLicenseComments: false
                }
            }
        },
        less: {
            
        }
    });

    grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'connect:livereload',
            'open',
            'watch'
        ]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'connect:test',
        'mocha'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'concurrent:dist',
        'copy',
        'cssmin',
        //'requirejs',
        'uglify',
        //'rev',
        'usemin'
    ]);

    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);

    grunt.registerTask('copydev')
};
