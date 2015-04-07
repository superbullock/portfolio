angular.module("portfolio", ['ngRoute'])
  .config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: "./views/main.html"
		})
			.when("/projects", {
				templateUrl: "./views/projects.html"
})
			.when("/resume", {
				templateUrl: "./views/resume.html"
		})
		
			.otherwise ({
				redirectTo: '/'
		})
})
  .controller("mainCtrl", ["$scope", function ($scope) {
    
  }]);