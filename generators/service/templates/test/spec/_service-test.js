'use strict';

describe('Service: <%=serviceName%>', function () {

    // load the directive's module
    beforeEach(module('mock-module'));
    beforeEach(module('<%=moduleName%>'));
    beforeEach(module('chico'));

    var <%=serviceName%>, scope, createControllerToTest;

    beforeEach(inject(function (_<%=serviceName%>_) {
        <%=serviceName%> = _<%=serviceName%>_;
    }));

    // Dummy test. Implement yours !
    it('should be the service', function () {
        expect(<%=serviceName%>.doSomeFirst).toBeDefined();
    });

});