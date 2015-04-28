angular.module("portfolio", ['ngRoute', 'ngAnimate'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: "templates/home.html"
      })
      .when('/projects', {
        templateUrl: "templates/projects.html"
      })
      .when('/resume', {
        templateUrl: "templates/resume.html"
      })
      .otherwise({
        redirectTo: '/'
      })
  })
  .controller("mainCtrl", ["$scope", function ($scope) {}]);

NG ANIMATED dan sucks