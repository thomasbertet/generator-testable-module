'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');

var TestableModuleGeneratorGenerator = yeoman.generators.Base.extend({
  init: function () {
    /*this.pkg = require('../package.json');*/

    this.on('end', function () {
      if (!this.options['skip-install']) {
        // this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous TestableModuleGenerator generator!'));

    var prompts = [{
      type: 'input',
      name: 'moduleName',
      message: 'What is the name of the new component ?',
      default: 'PivotTable'
    },{
        type: 'input',
        name: 'componentProvider',
        message: 'What is the provider of the new component ?',
        default: 'reporting'
    },{
        type: 'input',
        name: 'componentType',
        message: 'What is the type of the new component ?',
        default: 'pivot'
    },{
        type: 'input',
        name: 'componentConfiguration',
        message: 'What is the configuration panel path of the new component ?',
        default: '../reporting_configuration/configuration.html'
    },{
            type: 'confirm',
            name: 'chicoDependency',
            message: 'Are you dependent on Chico module ?',
            default: true
    }];

    this.prompt(prompts, function (props) {
      this.moduleName = props.moduleName.toLowerCase();
      this.compProvider = props.componentProvider;
      this.compType = props.componentType;
      this.compConfigurationPath = props.componentConfiguration;
      this.compIsChicoDependent = props.chicoDependency;

      this.controllerName = this.moduleName + 'Controller';
      this.serviceName = this.moduleName + 'Service';
      this.rawDirectiveName = this.moduleName;
      this.directiveName = this.moduleName + 'Directive';
      this.configName = this.moduleName + 'Config';
      this.templateName = this.moduleName + 'Template';

      this.dependencies = '$scope';

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir(this.moduleName);

    // Changing the destination root to the module name folder previously created.
    this.destinationRoot(this.destinationRoot() + '/' + this.moduleName);

    this.copy('common/modules.js');
    this.copy('common/css/_module.css', 'common/css/' + this.moduleName +'.css');
    this.directory('test', 'test');

    this.template('modules/configs/_config.js', 'modules/configs/' + this.configName.toLowerCase() + '.js');
    this.template('modules/services/_service.js', 'modules/services/' + this.serviceName.toLowerCase() + '.js');
    this.template('modules/directives/_directive.js', 'modules/directives/' + this.directiveName.toLowerCase() + '.js');
    this.template('modules/controllers/_controller.js', 'modules/controllers/' + this.controllerName.toLowerCase() + '.js');
    this.template('modules/templates/_module.html', 'modules/templates/' + this.templateName.toLowerCase() + '.html');

    this.copy('_package.json', 'package.json');
    //this.copy('_bower.json', 'bower.json');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = TestableModuleGeneratorGenerator;
