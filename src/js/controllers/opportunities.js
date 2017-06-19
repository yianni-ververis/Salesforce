'use strict';

/** 
 * @ngdoc function
 * @name friluftsframjandetApp.controller:controller.management
 * @author yianni.ververis@qlik.com
 * @description
 * # controller.management
 */

var controller = ($scope, $rootScope, $location, $injector, qlik, api, app, ga) => {

	var me = {};

	me.init = () => {
		$rootScope.page = 'opportunities';
		// $scope.vars = {
		// 	stackedBar: 'kaHbZ'
		// }
		$scope.stackedBar = 1;
		$scope.tab = 0;
		$scope.type = 0;
		$scope.chart = [
			['WvVaK','BghTnb'],
			['WBKAnUW','MvNjrYQ'],
			['20c11a78-a41b-4e9f-a6b3-68fcdb12139d','78afa14c-913f-43ae-9b4d-740e1da6cdf0'],
		]
		$scope.mobileSelected = "OPPORTUNITY OVER TIME";
	}
	
	me.boot = () => {
		me.init();
		me.events();
		app.log(`${$rootScope.page} loaded: `, 'Success!');
	};

	me.events = () => {
		// For debugging selections uncommment the line below
		// qlik.app.getObject('CurrentSelections', 'CurrentSelections');
		ga.pageview();
		$scope.selectTab = (tab) => {
			$scope.tab = tab;
		}
		$scope.selectType = (type) => {
			$scope.type = type;
		}
	}

	me.boot();
};
controller.$inject = ['$scope', '$rootScope', '$location', '$injector', 'qlik', 'api', 'app', 'ga'];
angular.module('controller.opportunities', [])
	.controller('controller.opportunities', controller);