'use strict';

describe('Directive: <%=moduleName%>', function () {

    // load the directive's module
    beforeEach(module('mock-module'));
    beforeEach(module('<%=moduleName%>'));
    beforeEach(module('chico'));

    var element, scope;

    beforeEach(inject(function ($rootScope,  $controller, $compile,  $templateCache) {
        scope = $rootScope.$new();

        element = angular.element('<<%=moduleName%> component="componentModel" workspace="workspace" class="<%=moduleName%>-component"></<%=moduleName%>>');
        element = $compile(element)(scope);
        scope.$digest();

    }));

    it('should create the directive', inject(function () {
        expect(element.isolateScope().vm.name).toBe('<%=moduleName%>');
    }));

});