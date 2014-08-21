'use strict';

describe('Controller: <%=controllerName%>', function () {

    // load the directive's module
    beforeEach(module('mock-module'));
    beforeEach(module('<%=moduleName%>'));
    beforeEach(module('chico'));

    var element, scope, createControllerToTest;

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();

        createControllerToTest = function() {
            return $controller('<%=controllerName%>', {
                '$scope': scope
            });
        };
    }));

    it('should create the controller', inject(function () {
        var controller = createControllerToTest();
        expect(controller.name).toBe('<%=moduleName%>');
    }));

});