var gulp            = require('gulp'),
    autoprefixer    = require('gulp-autoprefixer'),
    browserSync     = require('browser-sync'),
    config          = require('../config').styles,
    handleErrors    = require('../util/handleErrors'),
    sass            = require('gulp-sass'),
    sourcemaps      = require('gulp-sourcemaps');

gulp.task('pldoc_styles', function () {
    return gulp.src(config.pldoc_src_files)
        .pipe(sourcemaps.init())
        .pipe(sass(config.settings_development))
        .on('error', handleErrors)
        .pipe(autoprefixer())
        .pipe(sourcemaps.write(config.settings_development.sourcemapsLocation))
        .pipe(gulp.dest(config.pldoc_local)) // move just for browersync + uncompressed local
        .pipe(gulp.dest(config.pldoc_dest))
        .pipe(browserSync.reload({stream:true}));
});
