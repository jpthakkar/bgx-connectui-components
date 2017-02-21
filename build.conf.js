/**
 *  This file contains all of the user settings for the gulp build process
 */
module.exports = {

  srcJs: ['component/**/*.module.js', 'component/**/*.js', '!component/**/*.spec.js', '!component/**/*_test.js'],
  tests: 'component/**/*.spec.js',
  buildFolder: 'dist',
  buildJsFilename: 'component.js',
  banner: '/*!\n' +
    ' * See LICENSE in this repository for license information\n' +
    ' */\n',
  closureStart: '(function(){\n',
  closureEnd: '\n})();'

};