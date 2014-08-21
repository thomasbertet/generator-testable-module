
module.exports = function(config) {
  'use strict';

  config.set({


    // list here all files that of this module that are necessary to run your test.
    // All global files (misysboard, and so on) will be added by the global karma.conf.js (test-libs)
    files: [
        'common/modules.js',
        /* include:services */
        'modules/services/<%= serviceName.toLowerCase() %>.js',
        /* include:configs */
        'modules/configs/<%= configName.toLowerCase() %>.js',
        /* include:directives */
        'modules/directives/<%= directiveName.toLowerCase() %>.js',
        /* include:controllers */
        'modules/controllers/<%= controllerName.toLowerCase() %>.js',
        'test/init.js',
        'test/mock/**/*.js',
        /* include:tests */
        'test/spec/**/*.js'

    ]
  });
};
