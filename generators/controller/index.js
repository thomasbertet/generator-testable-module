'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');

var ControllerTestableModuleSubGenerator = yeoman.generators.Base.extend({

  init: function () {


    this.on('end', function () {
      if (!this.options['skip-install']) {
        // this.installDependencies();
      }
    });



      // Add it to package.json.
      // Read package.json & update.
      this.packageFilePath = './package.json';

      this.log(yeoman.fail);

      if (yeoman.file.exists(this.packageFilePath)) {
          this.pkg = yeoman.file.readJSON(this.packageFilePath);
      }
      else {
          this.log('ERROR - Couldn\'t locate package.json file. You should launch the command line from the root folder of your component. (the one that contains the package.json file.)');
          return false;
      }
  },

  askFor: function () {
    var done = this.async();

    // Handling back-slashes & slashes.
    var defaultComponentName = this.destinationRoot().match(/([^\\]*)$/)[1];
    var matchingSlash = defaultComponentName.match(/([^\/]*)$/);
    if (matchingSlash != null) {
        defaultComponentName = matchingSlash[1];
    }

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous Controller sub-generator! I\'ll add for you the file to package.json and karma.conf.js files.'));

    var prompts = [{
        type: 'input',
        name: 'moduleName',
        message: 'In which module should I add it to ? ',
        default: defaultComponentName
    },{
      type: 'input',
      name: 'controllerName',
      message: 'What is the name of the new controller (will automatically add the \'controller\' suffix) ?',
      default: 'Somefancytable'
    },{
        type: 'confirm',
        name: 'addTests',
        message: 'Would you like to create a default test case ?',
        default: true
    },{
        type: 'input',
        name: 'dependencies',
        message: 'List all dependencies (comma-separated module names)',
        default: '$window, $scope, $element, $attrs, chico, MisysBoard'
    }];

    this.prompt(prompts, function (props) {
      this.moduleName = props.moduleName.toLowerCase();
      this.controllerName = props.controllerName + 'Controller';
      this.dependencies = props.dependencies;
      this.addTests = props.addTests;

      done();
    }.bind(this));
  },

  app: function () {

    // Add it to destination folder if not exists.
    if (!yeoman.file.isDir('/modules/controllers')) {
        this.mkdir('/modules/controllers');
    }

    var controllerDestinationPath = 'modules/controllers/' + this.controllerName.toLowerCase() + '.js';
    this.template('../../app/templates/modules/controllers/_controller.js', controllerDestinationPath);

    // Add it to package.json.
    this.pkg.scripts.push(controllerDestinationPath);

    this.write(this.packageFilePath, JSON.stringify(this.pkg, null, 4));

    if (this.addTests) {
        var testFileDestinationPath = 'test/spec/controllers/' + this.controllerName.toLowerCase() + '-test.js';
        this.template('test/spec/_controller-test.js', testFileDestinationPath);


        var karmaConfPath = './test/karma.conf.js';
        if (yeoman.file.exists(karmaConfPath)) {
            var karmaConf = yeoman.file.read(karmaConfPath);

            // Replace /* include:controller */ with the newly created file.
            // Replace /* include:test */ with the newly created test file.
            karmaConf = karmaConf
                .replace('/* include:controllers */' , '/* include:controllers */ \n        \'' + controllerDestinationPath + '\',')
                .replace('/* include:tests */' , '/* include:tests */ \n        \'' + testFileDestinationPath + '\',');

            this.write(karmaConfPath, karmaConf);
        }
    }

  },

  projectfiles: function () {

  }
});

module.exports = ControllerTestableModuleSubGenerator;
