// we can just use the exact same webpack config by requiring it
// but make sure to delete the normal entry
var webpackConf = require('./webpack.base.config')
delete webpackConf.entry

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      type: 'html',
      dir: '../coverage/'
    },
    // this is the entry file for all our tests.
    files: ['../test/unit/index.js'],
    // we will pass the entry file to webpack for bundling.
    preprocessors: {
      '../test/unit/index.js': ['webpack', 'coverage']
    },
    webpack: webpackConf,
    webpackMiddleware: {
      noInfo: true
    },
    singleRun: true
  })
}
