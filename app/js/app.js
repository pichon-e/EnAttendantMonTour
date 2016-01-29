'use strict';

/* App Module */

var EnAttendantMonTour = angular.module('EnAttendantMonTour', ['ngMaterial']);

EnAttendantMonTour.controller('AppCtrl', ['$scope' , function($scope) {
      $scope.title1 = 'Button';
      $scope.title4 = 'Warn';
      $scope.isDisabled = true;
      $scope.googleUrl = 'http://google.com';
    }
]);
