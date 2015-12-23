(function(angular) {
  'use strict';

  angular.module('am').factory('StudentService', svc);

  svc.$inject = ['$http', 'api'];

  function svc($http, api) {
    var svc = this;

    svc.save = function(student) {
      return $http.post(api.student, student);
    };

    svc.getAll = function() {
      return $http.get(api.student);
    };

    return svc;
  }

})(angular);
