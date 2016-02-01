var elixir = require('laravel-elixir');
var gulp = require('gulp');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */



gulp.task("copyfiles", function() {

  gulp.src("vendor/bower_dl/jquery/dist/jquery.js")
      .pipe(gulp.dest("resources/assets/js/"));

  gulp.src("vendor/bower_dl/bootstrap/dist/css/bootstrap.css")
      .pipe(gulp.dest("resources/assets/css/bootstrap"));

  gulp.src("vendor/bower_dl/bootstrap/dist/js/bootstrap.js")
      .pipe(gulp.dest("resources/assets/js/"));

  gulp.src("vendor/bower_dl/bootstrap/dist/fonts/**")
      .pipe(gulp.dest("public/assets/fonts"));

});

elixir(function(mix) {
  mix.scripts([
        'js/jquery.js',
        'js/bootstrap.js'
      ],
      'public/assets/js/admin.js',
      'resources/assets'
  );

  mix.sass('app.scss');
});
