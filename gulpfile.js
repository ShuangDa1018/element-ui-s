const gulp = require('gulp')
const sass = require ( 'gulp-sass' ) ( require ( 'sass' ) ) // sass -> css
const minifyCSS = require('gulp-minify-css')
gulp.task('sass',async function(){
    return gulp.src('packages/theme-chalk/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('lib/theme-chalk'))
})

