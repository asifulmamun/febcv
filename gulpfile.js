'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const babel = require('gulp-babel');


// Sass - gulp sass
function gulpsass() {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
};
exports.sass = gulpsass;

gulp.task('default', () =>
    gulp.src('./src/js/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('./assets/js'))
);
