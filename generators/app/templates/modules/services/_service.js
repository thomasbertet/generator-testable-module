'use strict';

(function() {
    angular.module('<%= moduleName %>.services')
        .factory('<%= serviceName %>', <%= serviceName %>);


    function <%= serviceName %>() {
        function _doSomeFirst() {
            // Do some
        }

        function _doSomeSecond() {
            // Do some again.
        }

        return {
            doSomeFirst : _doSomeFirst,
            doSomeSecond : _doSomeSecond
        };
    }
})();