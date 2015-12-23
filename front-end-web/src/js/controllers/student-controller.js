(function(angular) {
  'use strict';

  angular.module('am').controller('StudentController', ctrl);

  ctrl.$inject = ['$http', 'StudentService'];

  function ctrl($http, studentService) {
    var ctrl = this;

    ctrl.init = function(argument) {
      ctrl.student = {};
      ctrl.students = [];

      studentService.getAll().success(function(data) {
        ctrl.students = data;
      });
    };

    ctrl.save = function(student) {
      studentService.save(student).success(function(data) {
        ctrl.student = {};
        ctrl.students.push(data);
      });
    };
  }

})(angular);
