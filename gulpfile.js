/* eslint-disable strict*/

'use strict';

/* 导入模块 */

const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const runSequence = require('run-sequence');

/* browserify任务2015 */
gulp.task('browserifyTask', () => browserify({
  entries: 'src/stack/StackTest.js',
  debug: true,
}).transform(babelify, { presets: ['es2015', 'es2016', 'es2017'] })
          .bundle()
          .pipe(source('main.js'))
          .pipe(gulp.dest('dist/')));

// 监视任务

gulp.task('watchjs', () => {
  gulp.watch('src/LeetCode/*', ['browserifyTask']);
});

gulp.task('runtasks', (callback) => {
  runSequence(['browserifyTask'],
            callback);
});


/* 生成文件 */
gulp.task('default', ['runtasks']);
