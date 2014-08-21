'use strict';

(function() {
    angular.module('<%= moduleName %>.controllers')
        .controller('<%= controllerName %>', <%= controllerName %>);

    /** @ngInject */
    function <%= controllerName %> (<%= dependencies %>) {

        // This controller is used using the 'Controller As' syntax. We're binding all to 'this'.
        var vm = this; // ViewModel

        // Do something, configure the controller.
        vm.name =  '<%= moduleName %>';
        vm.someProperty = 'someValue';
        vm.doStuffOnClick = _doStuffOnClick;
        vm.init = _initDirective;

        function _doStuffOnClick() {
            console.log('I need to do stuff on click ? ');

            // Modifying some model property
            vm.name = vm.name + '-clicked'; // Remember to put logic in the service instead of controller.
        }

        function _initDirective() {
            console.log('<%= moduleName %> initialized.');
        }

        // Use the scope only to add watchers / listen or emit events / do magical angular stuff.
        $scope.$on('someEvent', function() {
            // Do something magical.
        });

        // Add vm watcher
        $scope.$watch(function() {return vm.name;}, function(newVal, oldVal) {
            console.log('the \'name\' property of the controller has changed from : ' + oldVal + ' to ' + newVal);
        });
    }
})();