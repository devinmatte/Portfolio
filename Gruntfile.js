module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        htmlmin: {
            dist: {
                options: {                                 // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {                                   // Dictionary of files
                    'index.html': 'portfolio.html'    // 'destination': 'source'
                }
            }
        },
        cssmin: {
            options: {
                keepSpecialComments: 0
            },
            target: {
                files: [{
                    expand: true,
                    cwd: 'assets/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'assets/css',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
            target: {
                options: {
                    mangle: false
                },
                files: {
                    'assets/js/main.min.js': 'assets/js/main.js',
                    'assets/js/util.min.js': 'assets/js/util.js'
                }
            }
        },
        realFavicon: {
            favicons: {
                src: './images/logo.svg',
                dest: './',
                options: {
                    iconsPath: './',
                    design: {
                        ios: {
                            pictureAspect: 'backgroundAndMargin',
                            backgroundColor: '#ffffff',
                            margin: '14%',
                            assets: {
                                ios6AndPriorIcons: false,
                                ios7AndLaterIcons: false,
                                precomposedIcons: false,
                                declareOnlyDefaultIcon: true
                            }
                        },
                        desktopBrowser: {},
                        windows: {
                            pictureAspect: 'whiteSilhouette',
                            backgroundColor: '#6e64e5',
                            onConflict: 'override',
                            assets: {
                                windows80Ie10Tile: true,
                                windows10Ie11EdgeTiles: {
                                    small: true,
                                    medium: true,
                                    big: true,
                                    rectangle: true
                                }
                            }
                        },
                        androidChrome: {
                            pictureAspect: 'noChange',
                            themeColor: '#6e64e5',
                            manifest: {
                                display: 'standalone',
                                orientation: 'notSet',
                                onConflict: 'override',
                                declared: true
                            },
                            assets: {
                                legacyIcon: true,
                                lowResolutionIcons: false
                            }
                        },
                        safariPinnedTab: {
                            pictureAspect: 'silhouette',
                            themeColor: '#6e64e5'
                        }
                    },
                    settings: {
                        scalingAlgorithm: 'Mitchell',
                        errorOnImageTooSmall: false,
                        readmeFile: false,
                        htmlCodeFile: false,
                        usePathAsIs: false
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-real-favicon');

    grunt.registerTask('default', ['htmlmin', 'cssmin', 'uglify', 'realFavicon']);

};