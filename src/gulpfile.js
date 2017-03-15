var gulp = require("gulp");
var shell = require('gulp-shell');

gulp.task('authentication', function(){
    require('./session_auth');
});

gulp.task('cookie', function(){
    require('./cookie.js');
});
