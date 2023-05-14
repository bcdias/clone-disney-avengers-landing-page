const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const replace = require('gulp-replace');
const htmlmin = require('gulp-htmlmin');
const clean = require('gulp-clean');



function compilaSass() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/styles'));
}

function imageCompress() {
    return gulp.src('./src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'))
}

function jsCompress() {
    return gulp.src('./src/js/*')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
}

function replaceTemplate() {
    return gulp.src(['./src/index.html'])
        .pipe(replace('<link rel="stylesheet" href="../dist/styles/main.css">', '<link rel="stylesheet" href="./styles/main.css">'))
        .pipe(replace('src="../dist/img/logo.svg"', 'src="./img/logo.svg"'))
        .pipe(replace('src="../dist/img/vingadores.jpeg"', 'src="./img/vingadores.jpeg"'))
        .pipe(replace('src="../dist/img/age.png"', 'src="./img/age.png"'))
        .pipe(replace('src="../dist/img/ad.png"', 'src="./img/ad.png"'))
        .pipe(replace('src="../dist/img/cc.png"', 'src="./img/cc.png"'))
        .pipe(gulp.dest('./prebuild'));
}

function htmlMinify(){
    return gulp.src('prebuild/index.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'));
}

function clear(){
    return gulp.src('./prebuild', {read: false})
        .pipe(clean());
}


exports.default =  gulp.series(replaceTemplate, htmlMinify, clear, gulp.parallel(compilaSass, imageCompress, jsCompress))

exports.watch = function () {
    gulp.watch('./src/styles/*.scss', { ignoreInitial: false }, gulp.parallel(compilaSass))
}