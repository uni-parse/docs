
// concts.......................

const {src, dest, watch, series, parallel} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const terser = require('gulp-terser');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');
const rename = require('gulp-rename');
const inject = require('gulp-inject');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const git = require('gulp-git');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
const cssnext = require('postcss-preset-env');
const webp = require('gulp-webp');
//const jimp = require('gulp-jimp');
//const asciify = require('asciify-image');
//const copy = require('gulp-copy');


// image task
function imgTask(){
 return src('src/images/*')
   .pipe(
     imagemin([
         imagemin.gifsicle({interlaced: true}),
         imagemin.mozjpeg({
           quality: 50, //0~100
           progressive: true,
		   smooth: 20, //blur
           //…
         }),  
       imagemin.optipng({
         optimizationLevel: 7, // 0~7 3'd
         bitDepthReduction: true, //true'd
         colorTypeReduction: true,
         paletteReduction: true,
         interlaced: false,
         errorRecovery: true,
       }), 
       imagemin.svgo({
             plugins: [
                 {name: 'removeViewBox', active: true},
                  {name: 'cleanupIDs', active: false}
              ]
         })
     ], {verbose: true} // enable console.logs
   ))
   .pipe(dest('build/images/'));
}
function webpTask(){
	return src('src/images/*')
	  .pipe(imagemin([
         imagemin.gifsicle({interlaced: true}),
         imagemin.mozjpeg({
           quality: 100, //0~100
           progressive: true,
		   smooth: 20, //blur
           //…
         }),  
       imagemin.optipng({
         optimizationLevel: 7, // 0~7 3'd
         bitDepthReduction: true, //true'd
         colorTypeReduction: true,
         paletteReduction: true,
         interlaced: false,
         errorRecovery: true,
       }), 
       imagemin.svgo({
             plugins: [
                 {name: 'removeViewBox', active: true},
                  {name: 'cleanupIDs', active: false}
              ]
         })
     ], {verbose: true} // enable console.logs
   ))
	  .pipe(webp({
	    //preset: defualt, //defualt|photo|picture|drawing|icon
	    quality: 50, //75'd 0~100
	    alphaQuality: 40, //100'd 0~100
	    method: 6, //4'd 0~6 (copression-size vs encoding-speed)
	    //size: , //by bytes
	    sns: 80, //amplitude of spatial noise shaping 0~100
	    //filter: , //deblocking filter strength 0(off)~100
	    autoFilter: false, //false'd boolean
	    sharpness: 0, // 0(sharpest) ~ 7(least sharp)
	    lossless: false, //false'd boolean
	    nearLossless: 0, //100'd 0(lossy) ~ 100(lossless)
	    //crop: , //object: {x: number, y: #, width: #, height: #}
	      //resize: , //after crop {width: #, height: #}
	    //metadata: all, //all|none|exif|icc|xmp
	    //buffer: , // type: Buffer ??
      }))
	  .pipe(dest('build/images/'));
}





// git tasks
/*
function gitTask(){
 return src('build/*')
   .pipe(git.add());
}
exports.add = gitTask;
*/





// html minify task
function htmlTask(){
 return src('src/*.html', {sourcemaps: false})
   .pipe(
     htmlmin({
       collapseWhitespace: true,
       collapseInlineTagWhitespace: true,
       minifyCSS: true,
       minifyJS: true,
       removeScriptTypeAttributes:true, //Remove type="text/javascript"
       removeStyleLinkTypeAttributes: true, //Remove type="text/css"
       removeAttributeQuotes: true,
       removeEmptyAttributes: true,
       removeRedundantAttributes: true, //Remove attributes when value matches default.
       removeComments: true,
       removeEmptyElements: false, // true if not using empty cells of tables
       removeOptionalTags: false,
       sortAttributes: true,
       sortClassName: true,
       useShortDoctype: true
     })
   )
   .pipe(rename('index.html'))
   .pipe(dest('build'));
}





// sass→css task
function sassTask(){
 var plugins = [
   autoprefixer({overrideBrowserslist: ['last 1 version']}),
   cssnext(),
   cssnano()
 ];
 return src('src/*.scss', {sourcemaps: false})
//.pipe(sourcemaps.init())
   .pipe(sass.sync().on('error', sass.logError))
   .pipe(concat('style.css'))
   .pipe(dest('src/sass'))
   .pipe(postcss(plugins))
//.pipe(sourcemaps.write('../maps'))
   .pipe(dest('build'));
}





// javascript task
function jsTask(){
 return src('src/**/*.js', {sourcemaps: false})
   .pipe(concat('script.js'))
   .pipe(
     terser({
       parse: {
         bare_returns: false,
         html5_comments: true,
         shebang: true, // support #!command as the first line
         spidermonkey: false
       },
       compress: {
         defaults: true, // affect MOST options initial values
         arrows: true, // m(){return x} → m:()=>x
         arguments: false,
         booleans: true, // !!a ? b : c → a ? b : c
         booleans_as_integers: false, // true|false → 1|0, ===|!== → ==|!=
         collapse_vars: true,
         comparisons: true, // !(a <= b) → a > b
         computed_props: true,//{["computed"]: 1}→{computed: 1}
         conditionals: true, // if|else
         dead_code: true,
         directives: true,
         drop_console: false,
         drop_debugger: true,
         ecma: 5 // 5|2015 'es5→ES6+'
         // …
       },
       mangle: {
         // mangle options
         properties: {
           // mangle property options
         }
       },
       format: {
         // format options (can also use `output` for backwards compatibility)
       },
       sourceMap: {
         // source map options
       },
       ecma: 5, // specify one of: 5, 2015, 2016, etc.
       enclose: false, // or specify true, or "args:values"
       keep_classnames: false,
       keep_fnames: false,
       ie8: false,
       module: false,
       nameCache: null, // or specify a name cache object
       safari10: false,
       toplevel: false
     })
   )
   //.pipe(rename('script.js'))
   .pipe(dest('build'));
}





// inject task
function injectTask() {
 var target = src('build/index.html');
 var sources = src(
   ['build/jquery*.js', 'build/style.css', 'build/script.js'],
   {read: false}
 );
 return target
   .pipe(inject(sources, {
     relative: true,
     
   }))
   .pipe(rename('injected.html'))
   .pipe(dest('build'));
}





// deleting temp files
function deleteTask(cd){
 cd();
 console.log('~~Hi~phantombill~~processing: cleaned !!!');
 return del.sync(['build/**/*', '!build/index.html', '!build/images', '!build/jquery*.js']);
}





// browser livereload & connect
function syncTask(cd){
	browserSync.init({
        server: "build/"
    });
	cd();
	console.log('~~Hi~phantombill~~processing: connected !!!');
}
function reloadTask(cb){
  browserSync.reload();
  cb();
}


// watch task
function watchTask(cd){
 watch('src/**/*.scss', series(sassTask, reloadTask));
 watch('src/**/*.js', series(jsTask, reloadTask));
 watch('src/*.html', series(htmlTask, reloadTask));
 watch('src/images/*', series(imgTask, reloadTask));
 //watch('build/**/*', gitTask);
 cd();
 console.log('~~Hi~phantombill~~processing: watching !!!');
}







// gulp tasks...............

exports.default = series(
 deleteTask,
 htmlTask,
 sassTask,
 jsTask,
 //imgTask,
 //gitTask,
 //injectTask,
 syncTask,
 watchTask
);
exports.html = htmlTask;
exports.js = jsTask;
exports.css = sassTask;
exports.inject = injectTask;
exports.del = deleteTask
exports.inject = injectTask;
exports.img = imgTask;
exports.webp = webpTask;
exports.sync = syncTask;
//exports.art = asciiTask;











/*
exports.default = function() {
 // The task will be executed upon startup
 watch(
   'src/*.js',
   {
     events: 'all', //add|addDir|change|unlink|unlinkDir|ready|error
     ignoreInitial: false,
     queue: false, //sequence
     delay: 200, //ms
   },
   function(cb) {
     // body omitted
     cb();
   }
 );
};*/
