let mix = require('laravel-mix');

mix.setPublicPath('static')
    .js('src/js/script.js', 'static/js')
    .sass('src/css/style.scss', 'static/css');
