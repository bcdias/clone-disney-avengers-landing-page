const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');



function compilaSass(){
    return gulp.src('./src/styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/styles'));
}

function imageCompress(){
    return gulp.src('./src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'))
}



exports.default = gulp.parallel(compilaSass, imageCompress)

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', {ignoreInitial: false}, gulp.parallel(compilaSass))
}