var gutil = require('gulp-util');


module.exports = function gulpLessReporter(err) {
  // Put the plugin name prefix to follow the gulp-way.
  gutil.log('gulp-less: ' + gutil.colors.red(err.message));
};
