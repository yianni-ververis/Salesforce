// public/js/appRoutes.js
angular.module('routes', [])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider,$locationProvider) { //, $locationProvider
	$urlRouterProvider.otherwise("/dashboard/");
	$stateProvider
	// @@ph-routes
	.state('dashboard', {
		url: "/dashboard/",
		views: {
			'main@': { 
				templateUrl: "views/dashboard.html",
				controller: 'controller.dashboard' 
			},
		}
	})
	.state('opportunities', {
		url: "/opportunities/",
		views: {
			'main': { 
				templateUrl: "views/opportunities.html",
				controller: 'controller.opportunities' 
			},
		}
	})
	.state('accounts', {
		url: "/accounts/",
		views: {
			'main': { 
				templateUrl: "views/accounts.html",
				controller: 'controller.accounts' 
			},
		}
	})
	.state('salesperson', {
		url: "/salesperson/",
		views: {
			'main': { 
				templateUrl: "views/salesperson.html",
				controller: 'controller.salesperson' 
			},
		}
	})
	// $locationProvider.html5Mode(true);
	// $locationProvider.hashPrefix('!');
}]);