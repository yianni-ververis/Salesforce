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
		$rootScope.page = 'dashboard';
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
	}

	me.boot();
};
controller.$inject = ['$scope', '$rootScope', '$location', '$injector', 'qlik', 'api', 'app', 'ga'];
angular.module('controller.dashboard', [])
	.controller('controller.dashboard', controller);