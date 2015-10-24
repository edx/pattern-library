// gulp pattern library + site configuration

// pattern library
var dest                        = './public',
    src                         = './pattern-library',
    local                       = './_site',

    // documentation site
    pldoc_src                   = './pldoc',

    // lib directory
    lib_dir                      = 'bower_components';

module.exports = {
    browserSync:                {
        server:                 {
            // Serve up our build folder
            baseDir:            local
        }
    },
    styles:                     {

        settings_development: {
            outputStyle: 'expanded',
            sourcemapsLocation: '.'
        },

        // pattern library
        src_files:              src + '/sass/**/*.scss',
        src:                    src + '/sass',
        dest:                   src + '/css',
        dest_files:             src + '/css/**/*.css',

        // documentation site
        pldoc_src:              pldoc_src + '/static/sass',
        pldoc_src_files:        pldoc_src + '/static/sass/**/*.scss',
        pldoc_dest:             dest + '/css',
        pldoc_dest_files:       dest + '/css/**/*.css',
        pldoc_local:            local + '/public/css',
    },
    fonts:                      {
        // pattern library
        src:                    src + '/fonts',
        src_files:              src + '/fonts/**/*',
        dest:                   dest + '/fonts',
        local:                  local + '/public/fonts',

        // documentation site
        pldoc_src:              pldoc_src + '/static/fonts',
        pldoc_src_files:        pldoc_src + '/static/fonts/**/*'
    },
    images:                     {
        // pattern library
        src:                    './pattern-library/images',
        src_files:              './pattern-library/images/**/*',
        dest:                   './public/images',
        local:                  './_site/public/images',

        // documentation site
        pldoc_src:              './pldoc/static/images',
        pldoc_src_files:        './pldoc/static/images/**/*'
    },
    scripts:                    {
        // pattern library
        src:                    src + '/js',
        src_files:              src + '/js/**/*.js',
        dest:                   dest + '/js',
        lib_dest:               [dest, 'js', lib_dir].join('/'),
        local:                  local + '/public/js',

        // documentation site
        pldoc_src:              pldoc_src + '/static/js',
        pldoc_src_files:        pldoc_src + '/static/js/**/*.js'
    },
    lib:                    {
        // third party libraries
        src:                    './' + lib_dir,
        src_files:              './' + lib_dir + '/**/*.js'
    },
    jekyll:                     {
        home:                   'index.html',
        posts:                  '_posts/**/*',
        includes:               '_includes/**/*',
        examples:               'examples/**/*',
        layouts:                '_layouts/**/*'
    }
};

