angular.module('<%= moduleName %>.configs', []);
angular.module('<%= moduleName %>.controllers', []);
angular.module('<%= moduleName %>.directives', []);
angular.module('<%= moduleName %>.services', []);
angular.module('<%= moduleName %>.templates', []);

angular.module('<%= moduleName %>', [
    '<%= moduleName %>.configs',
    '<%= moduleName %>.controllers',
    '<%= moduleName %>.directives',
    '<%= moduleName %>.services',
    '<%= moduleName %>.templates'
]);