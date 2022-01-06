'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function gulpsass() {
  return gulp.src('./assets/sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
};

  
// exports.default = gulpsass;
exports.sass = gulpsass;
