(function(){
  'use strict';
angular.module('LunchCheck', [])
       .controller('LunchCheckController', LunchCheckController);

    LunchCheckeController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.name = '';
    $scope.message = '';

    $scope.displayMessage = function() {
      if ($scope.name==='') {
        $scope.message = 'Please enter data first';
      } else {
        var dishes = $scope.name.split(',');
        var num = dishes.length;
        if(num <= 3) {
              $scope.message = 'Enjoy!';
        } else {
              $scope.message = 'Too much!';
        }
      }

    };
  }


})();
