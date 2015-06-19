var gulp            = require('gulp');
var config          = require('../config').scripts;
var browserSync     = require('browser-sync');
var concat          = require('gulp-concat');
var rename          = require('gulp-rename');
var uglify          = require('gulp-uglify');

gulp.task('scripts', ['pl_scripts-lint'], function() {
    return gulp.src([
            // setup script sequence
            './_src/vendor/svg4everybody/svg4everybody.min.js' // polyfill for SVGs in IE9-11
        ])
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(config.pl_local)) // move just for browersync + local preview
        .pipe(gulp.dest(config.pl_dest))
        .pipe(browserSync.reload({stream:true}))
});
