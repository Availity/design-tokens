const StyleDictionary = require('style-dictionary').extend({
  
  source: ['src/tokens/**/*.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: 'dist/scss/',
      files: [{
        destination: 'variables.scss',
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
    web: {
      transformGroup: 'js',
      buildPath: 'dist/json/',
      files: [{
        destination: 'tokens.json',
        format: 'json/nested'
      }],
      options: {
        showFileHeader: false,
        outputReferences: true
      },
      
    },
    web: {
      transformGroup: 'js',
      buildPath: 'dist/js/',
      files: [{
        destination: 'tokens.js',
        format: 'javascript/module'
      }],
      options: {
        showFileHeader: false,
        outputReferences: true
      }
    }
  }
});

StyleDictionary.buildAllPlatforms();
