/* 
* DEPENDANCIES for Sense 2.2.3 - Angular 1.2.15, Bootstrap 3.1.1, jQuery  2.1.3?
* DEPENDANCIES for Sense 3.0 - Angular 1.5.0, Bootstrap 3.3.6, jQuery  2.1.3
*/
require.config({
	// config: {
	// 	css: {
	// 		useXhr: function (url, protocol, hostname, port) {
	// 			return true;
	// 		}
	// 	},
	// },
	baseUrl: '@@pt-base', 
	paths: {
		'domReady': '@@ph-scriptsUrl' + 'js/vendor/domReady',
		'tether': '@@ph-scriptsUrl' + 'js/vendor/tether.min', // for bootstrap 4 to work
		'bootstrap': '@@ph-scriptsUrl' + 'js/vendor/bootstrap.min',
		'ui.router': '@@ph-scriptsUrl' + 'js/vendor/angular-ui-router.min',
		'controllers': '@@ph-scriptsUrl' +'js/controllers',
		'services': '@@ph-scriptsUrl' +'js/services',
		'directives': '@@ph-scriptsUrl' +'js/directives',
	},
	shim : {
		"bootstrap" : ['jquery','tether'] ,
	},
});
require([
	'domReady', 
	'js/qlik',
	'angular',
	'bootstrap',
	'ui.router',
	'controllers',
	'services',
	'directives',	
], function (document, qlik, angular) {
	window.qlik = qlik;
	qlik.setOnError( function ( error ) {
		if (!angular.isUndefined(error) && error.code == 16) {
			// location.reload(false);
		} else {
			// console.log(error);
		}
	} );
	angular.module('myApp', [
		'ngAnimate',
		'ui.router',
		'routes',
		'controller.dashboard',
		'controller.opportunities',
		'controller.accounts',
		'controller.salesperson',
		'directive.getObject',
		'directive.multiGetObject',
		'directive.dropDown',
		'directive.getSelectionObject',
		'directive.kpi',
		'directive.multiVisualization',
		'service.app',
		'service.api',
		'service.qlik',
		'service.ga',
		'factory.css'
	])
	angular.bootstrap( document, ["myApp", "qlik-angular"] );
});
define([
	'require',
	'angular',
	'tether',
], function (require, angular, Tether) {
	'use strict';
	window.Tether = Tether; // For Bootstrap 4 to work
});