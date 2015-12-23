(function(angular) {
  'use strict';

  var _basePath = 'http://localhost:1337/';

  angular.module('am').constant('api',
    {
      path: _basePath,
      student: _basePath + 'student'
    }
  );

})(angular);
