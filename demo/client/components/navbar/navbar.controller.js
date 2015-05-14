'use strict';

angular.module('ngDemo1App')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
    {
      'title': 'Home',
      'link': '/'
    }, 
    {
      'title': 'Contacts',
      'link': '/contacts'      
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });