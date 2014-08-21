'use strict';

(function() {
    angular.module('<%= moduleName %>.directives')
        .directive('<%= rawDirectiveName.toLowerCase() %>', <%= directiveName %>);

    /** @ngInject */
    function <%= directiveName %> () {
        // Do something, configure the directive.

        return {
            restrict: 'EA',
            scope: {}, // Private (isolated) scope ! You might need to change this ... (reminder : false => parent scope, true => child scope -prototypically inherited- )
            replace : true,
            template : '<div>New directive <%= moduleName %><a href="" ng-click="vm.doStuffOnClick()">Click me!</a></div>',
            controller : '<%= controllerName %>',
            controllerAs : 'vm',
            link : function(scope, element, attrs, ctrl) {
                ctrl.init();
            }
        };

    }
})();