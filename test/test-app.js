/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('testable-module:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({ 'skip-install': true })
      .withPrompt({
        moduleName : 'PivotTable',
        componentProvider: 'reporting',
        componentType:'pivot',
        componentConfiguration:'../reporting_configuration/configuration.html',
        chicoDependency:true
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'package.json',
      '.editorconfig',
      '.jshintrc'
    ]);
  });
});
