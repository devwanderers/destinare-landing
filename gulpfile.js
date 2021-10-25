const gulp = require('gulp')
const gulpless = require('gulp-less')
const debug = require('gulp-debug')
const csso = require('gulp-csso')
const autoprefixer = require('gulp-autoprefixer')
const NpmImportPlugin = require('less-plugin-npm-import')

gulp.task('less', function () {
    return (
        gulp
            .src('./src/themes/*-theme.less')
            .pipe(debug({ title: 'Less files:' }))
            .pipe(
                gulpless({
                    javascriptEnabled: true,
                    plugins: [new NpmImportPlugin({ prefix: '~' })],
                })
            )
            .pipe(
                autoprefixer({
                    cascade: false,
                })
            )
            // .pipe(postcss(plugins))
            .pipe(
                csso({
                    debug: true,
                })
            )
            .pipe(gulp.dest('./public/themes'))
    )
    // .pipe(gulp.dest('./public'))
})
