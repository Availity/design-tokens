const StyleDictionary = require('style-dictionary').extend({
  
  source: ['src/tokens/**/*.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: 'dist/scss/',
      files: [{
        destination: '_variables.scss',
        format: 'scss/variables'
      }],
      options: {
        'outputReferences': true
      }
    },
    css: {
      transformGroup: 'css',
      buildPath: 'dist/css/',
      files: [{
        destination: 'variables.css',
        format: 'css/variables'
      }],
      options: {
        'outputReferences': true
      }
    },
    js: {
      transformGroup: 'js',
      transforms: ["attribute/cti", "name/cti/camel", "color/hex", "size/rem"],
      buildPath: 'dist/js/',
      files: [{
        destination: 'tokens.js',
        format: 'javascript/es6'
      }],
      options: {
        showFileHeader: false,
        outputReferences: true
      },
    }
  }
});

StyleDictionary.buildAllPlatforms();
