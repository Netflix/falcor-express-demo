'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');

/*
 * Gulp default task
 */
gulp.task('default', ['browser-sync'], function(){

});

gulp.task('browser-sync', ['nodemon'], function(){
	browserSync.init(null, {
		proxy: 'http://localhost:9091',
		files: ['*.html'],
		browser: "google chrome",
		port: 9090
	});
});

gulp.task('nodemon', function(cb){
	var started = false;

	return nodemon({
		script: 'index.js'
	}).on('start', function(){
		if(!started){
			cb();
			started = true;
		}
	});
});
