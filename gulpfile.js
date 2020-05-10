const {src, dest, parallel} = require('gulp');
const concat = require('gulp-concat');

function js() {
  return src('src/**/*.js', {sourcemaps: true})
    .pipe(concat('app.min.js'))
    .pipe(dest('build/js', {sourcemaps: true}));
}

exports.js = js;
exports.default = parallel(js);
