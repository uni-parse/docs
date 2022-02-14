
// concts.......................

const {src, dest, watch, series, parallel} = require('gulp');

const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const terser = require('gulp-terser');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');
const rename = require('gulp-rename');
const del = require('del');
const imagemin = require('gulp-imagemin');
const cssnext = require('postcss-preset-env');
const browserSync = require('browser-sync').create();
const webp = require('gulp-webp');
const spritesmith = require('gulp.spritesmith');


// sprite images
function spriteTask(){
  return src('src/images/*')
    .pipe(spritesmith({imgName: 'sprite.png', cssName: 'sprite.css'}))
    .pipe(dest('build/images/'));
}

// image task
function imgTask(){
 return src('src/images/**/*')
   .pipe(
     imagemin([
         imagemin.gifsicle({interlaced: true}),
         imagemin.mozjpeg({
           quality: 75, //0~100
           progressive: true,
           //…
         }),  
       imagemin.optipng({
         optimizationLevel: 5, // 0~7 3'd
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
	return src('src/images/**/*')
	  .pipe(webp())
	  .pipe(imagemin({verbose: true}))
	  .pipe(dest('build/images/'));
}

// html minify task
function htmlTask(){
  return src('src/*.html', {sourcemaps: false})
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        removeScriptTypeAttributes:true, //Remove type="text/javascript"
        removeStyleLinkTypeAttributes: true, //Remove type="text/css"
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

//const sass = require('gulp-sass')(require('sass'));
const sass = require('gulp-sass')(require('sass-embedded'));
// sass→css task
function sassTask(){
  var plugins = [ 
    autoprefixer({overrideBrowserslist: ['last 2 version']}),
    cssnext(),
    cssnano()
  ];
  return src('src/*.scss', {sourcemaps: false})
 //.pipe(sourcemaps.init())
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(dest('src/sass'))
    .pipe(postcss(plugins))
 //.pipe(sourcemaps.write('../maps'))
    .pipe(dest('build'));
}

//sassWatch
function onlySassTask(){
  return src('src/*.scss', {sourcemaps: false})
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(dest('src/sass'))
}function sassWatchTask(cd){
  watch('src/**/*.scss', onlySassTask);
  cd();
  console.log('~~Hi~phantombill~~processing: watching !!!');
}


// javascript task
function jsTask(){
  return src('src/*.js', {sourcemaps: false})
    .pipe(concat('script.js'))
    .pipe(
      terser({
        parse: {
          bare_returns: false,
          html5_comments: true,
          shebang: true, // support #!command as the first line
          spidermonkey: false
        },
        compress: {
          defaults: true, // affect MOST options initial values
          arrows: true, // m(){return x} → m:()=>x
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

// deleting temp files
function deleteTask(cd){
  cd();
  console.log('~~Hi~phantombill~~processing: cleaned !!!');
  return del.sync(['build/**/*', '!build/index.html', '!build/images', '!build/jquery*.js']);
}

// browser sync
function serverTask(cd){
	browserSync.init({
  server: "build/",
  notify: false
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
  watch('src/images/**/*', series(imgTask, reloadTask));
  //watch('build/**/*', gitTask);
  cd();
  console.log('~~Hi~phantombill~~processing: watching !!!');
}

// gulp tasks...............

exports.default = series(
  //deleteTask,
  htmlTask,
  sassTask,
  jsTask,
  //webpTask,
  //imgTask,
  //gitTask,
  //injectTask,
  serverTask,
  watchTask
);
exports.w = watchTask;
exports.sass =sassWatchTask;
exports.html = htmlTask;
exports.js = jsTask;
exports.css = sassTask;
exports.del = deleteTask;
exports.sync = serverTask;
exports.img = imgTask;
exports.webp = webpTask;
exports.sprite = spriteTask;