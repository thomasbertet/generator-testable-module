angular.module('mock-module')
    .factory('mockedModule', function() {
       return {
           something : function(e) {
               console.log('something' + e);
               return e;
           }
       };
    });
