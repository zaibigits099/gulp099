# gulp099
Gulp Training Module

Ref Urls:
http://blog.teamtreehouse.com/install-node-js-npm-windows
https://semaphoreci.com/community/tutorials/getting-started-with-gulp-js

Gulp Good Packages:
https://lincolnloop.com/blog/untangle-your-javascript-browserify/

/**********************************************************/

npm install --save-dev gulp -g
npm install --save-dev gulp-concat
npm install --save-dev gulp-minify
npm install --save-dev gulp-rename
npm install --save-dev gulp-uglify
npm install --save-dev gulp-if
npm install --save-dev gulp-jade
npm install --save-dev gulp-browserify
npm install --save-dev jquery

/**********************************************************/

// gulp-if needed to be installed first for it.

$env:NODE_ENV="development"
$env:NODE_ENV="production"

set NODE_ENV=production
set NODE_ENV=development

var env = process.env.NODE_ENV || 'development';

/**********************************************************/
