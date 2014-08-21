'use strict';

(function() {
    angular.module('<%= moduleName %>.configs')
        .config(<%= configName %>);

        /** @ngInject */
        function <%= configName %> () {
                // Do something, configure the module.
        }
})();