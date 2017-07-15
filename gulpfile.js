//引用模块
var gulp = require('gulp');

var sass = require('gulp-sass');

gulp.task('kok',()=>{
	gulp.src('./src/sass/*.scss',)

	//编译
	.pipe(sass({outputStyle:'compact'}))

	.pipe(gulp.dest('./src/css/'))
});

gulp.task('jt',()=>{
	gulp.watch('./src/**/*.scss',['kok']);
});

var browserSync = require('browser-sync')

gulp.task('myserver',()=>{
	//开启服务器
	browserSync({
		// 代理服务器
		proxy:'http://localhost:957',

		// 端口
		port:958,

		files:['./src/**/*.html','./src/css/*.css','./src/api/*.php']
	})

	gulp.watch('./src/**/*.scss',['kok']);
})

