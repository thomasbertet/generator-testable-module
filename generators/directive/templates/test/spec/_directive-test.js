'use strict';

describe('Directive: <%=rawDirectiveName%>', function () {

    // load the directive's module
    beforeEach(module('mock-module'));
    beforeEach(module('<%=moduleName%>'));
    beforeEach(module('chico'));

    var element, scope;

    beforeEach(inject(function ($rootScope,  $controller, $compile,  $templateCache) {
        scope = $rootScope.$new();

        element = angular.element('<<%=rawDirectiveName.toLowerCase() %> component="componentModel" workspace="workspace" class="<%=moduleName%>-component"></<%=rawDirectiveName.toLowerCase()%>>');
        element = $compile(element)(scope);
        scope.$digest();

    }));

    it('should create the directive', inject(function () {
        expect(element).toBeDefined();
    }));

});