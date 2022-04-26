// concts.......................
const { src, dest, watch, series, parallel } = require('gulp');
const rename = require('gulp-rename');

// html minify task
const htmlmin = require('gulp-htmlmin');
function htmlTask() {
  return (
    src('src/**/*.html', { sourcemaps: false })
      .pipe(
        htmlmin({
          collapseWhitespace: true,
          collapseInlineTagWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
          removeScriptTypeAttributes: true, //Remove type="text/javascript"
          removeStyleLinkTypeAttributes: true, //Remove type="text/css"
          removeAttributeQuotes: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true, //Remove attributes when value matches default.
          removeComments: true,
          removeEmptyElements: false, // true if not using empty cells of tables
          removeOptionalTags: false,
          sortAttributes: true,
          sortClassName: true,
          useShortDoctype: true,
        })
      )
      //.pipe(rename("index.html"))
      .pipe(dest('build'))
  );
}
exports.html = htmlTask;

// sass→css task
const sass = require('gulp-sass')(require('sass'));
//const sass = require('gulp-sass')(require('sass-embedded'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
//const autoprefixer = require("autoprefixer");
const cssnext = require('postcss-preset-env');
function sassTask() {
  return (
    src('src/sass/**/*.scss', { sourcemaps: false })
      //.pipe(sourcemaps.init())
      .pipe(
        sass
          .sync({ outputStyle: 'compressed' })
          .on('error', sass.logError)
      )
      .pipe(
        postcss([
          cssnext({
            stage: 1,
            minimumVendorImplementations: 1,
          }),
          cssnano(),
        ])
      )
      //.pipe(sourcemaps.write('../maps'))
      .pipe(dest('build'))
  );
}// only sass Watch tasks
function onlySassTask() {
  return src('src/sass/**/*.scss', { sourcemaps: false })
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(
      postcss([
        cssnext({ stage: 1, minimumVendorImplementations: 1 }),
      ])
    )
    .pipe(rename('_debug.css'))
    .pipe(dest('src/sass/'));
} function sassWatchTask(cd) {
  onlySassTask();
  watch('src/sass/**/*.scss', onlySassTask);
  cd();
  console.log("Hi😎UniParse😄 I'm: watching sass");
}
exports.css = sassTask;
exports.sass = sassWatchTask;

// javascript task
const terser = require('gulp-terser');
const concat = require('gulp-concat');
function jsTask() {
  return (
    src(['src/js/**/*.js', '!src/js/**/_debug.js'], { sourcemaps: false })
      .pipe(concat('script.js'))
      .pipe(
        terser({
          parse: {
            bare_returns: false,
            html5_comments: true,
            shebang: true, // support #!command as the first line
            spidermonkey: false,
          },
          compress: {
            defaults: true, // affect MOST options initial values
            arrows: true, // m(){return x} → m:()=>x
            arguments: false,
            booleans: true, // !!a ? b : c → a ? b : c
            booleans_as_integers: false, // true|false → 1|0, ===|!== → ==|!=
            collapse_vars: true,
            comparisons: true, // !(a <= b) → a > b
            computed_props: true, //{["computed"]: 1}→{computed: 1}
            conditionals: true, // if|else
            dead_code: true,
            directives: true,
            drop_console: false,
            drop_debugger: true,
            ecma: 5, // 5|2015 'es5→ES6+'
            // …
          },
          mangle: {
            // mangle options
            properties: {
              // mangle property options
            },
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
          toplevel: false,
        })
      )
      //.pipe(rename('script.js'))
      .pipe(dest('build'))
  );
}//only js watch task
function onlyJsTask() {
  return (
    src(['src/js/**/*.js', '!src/js/**/_debug.js'], { sourcemaps: false })
      .pipe(concat('_debug.js'))
      .pipe(
        terser({
          parse: {
            bare_returns: false,
            html5_comments: true,
            shebang: true, // support #!command as the first line
            spidermonkey: false,
          },
          compress: {
            defaults: false, // affect MOST options initial values
            arrows: false, // m(){return x} → m:()=>x
            arguments: false,
            booleans: false, // !!a ? b : c → a ? b : c
            booleans_as_integers: false, // true|false → 1|0, ===|!== → ==|!=
            collapse_vars: false,
            comparisons: false, // !(a <= b) → a > b
            computed_props: true, //{["computed"]: 1}→{computed: 1}
            conditionals: true, // if|else
            dead_code: true,
            directives: true,
            drop_console: true,
            drop_debugger: true,
            ecma: 5, // 5|2015 'es5→ES6+'
            // …
          },
          ecma: 5, // specify one of: 5, 2015, 2016, etc.
          enclose: false, // or specify true, or "args:values"
          keep_classnames: false,
          keep_fnames: false,
          ie8: false,
          module: false,
          nameCache: null, // or specify a name cache object
          safari10: false,
          toplevel: false,
        })
      )
      .pipe(dest('src/js'))
  );
} function jsWatchTask(cd) {
  onlyJsTask();
  watch(['src/js/**/*.js', '!src/js/**/_debug.js'], onlyJsTask);
  cd();
  console.log("Hi😎UniParse😄 I'm: watching js");
}
exports.js = jsWatchTask;
exports.Js = jsTask;

// images tasks
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const spritesmith = require('gulp.spritesmith');
function imgTask() {
  return src('src/images/**/*')
    .pipe(
      imagemin(
        [
          imagemin.gifsicle({ interlaced: true }),
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
              { name: 'removeViewBox', active: true },
              { name: 'cleanupIDs', active: false },
            ],
          }),
        ],
        { verbose: true } // enable console.logs
      )
    )
    .pipe(dest('build/images/'));
} function webpTask() {
  return src('src/images/**/*')
    .pipe(webp())
    .pipe(imagemin({ verbose: true }))
    .pipe(dest('build/images/'));
} function spriteTask() {
  return src('src/images/*')
    .pipe(
      spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.css',
      })
    )
    .pipe(dest('build/images/'));
}
exports.img = imgTask;
exports.webp = webpTask;
exports.sprite = spriteTask;

// deleting temp files
const del = require('del');
function deleteTask(cd) {
  cd();
  console.log("Hi😎UniParse😄 I'm: cleaning");
  return del.sync([
    'build/**/*',
    '!build/index.html',
    '!build/images',
    '!build/jquery*.js',
  ]);
}
exports.del = deleteTask;

// browser sync
const browserSync = require('browser-sync').create();
function serverTask(cd) {
  browserSync.init({
    server: 'build/',
    notify: false,
  });
  cd();
  console.log("Hi😎UniParse😄 I'm: connecting");
}
function reloadTask(cb) {
  browserSync.reload();
  cb();
}
exports.sync = serverTask;

// watch task
function watchTask(cd) {
  watch('src/**/*.html', series(htmlTask, reloadTask));
  watch('src/sass/**/*.scss', series(sassTask, reloadTask));
  watch(['src/js/**/*.js', '!src/js/**/_debug.js'], series(jsTask, reloadTask));
  watch('src/images/**/*', series(webpTask, reloadTask));
  cd();
  console.log("Hi😎UniParse😄 I'm: watching");
}
exports.w = watchTask;

exports.default = series(
  //deleteTask,
  htmlTask,
  sassTask,
  jsTask,
  //webpTask,
  //imgTask,
  //injectTask,
  serverTask,
  watchTask
);
