'use strict';

/**
 * @ngdoc function
 * @owner yianni.ververis@qlik.com
 * @description
 * # app
 * Controller of the myApp
 */
angular.module('service.qlik', [])
.service('qlik', function ($q, $rootScope, utility) {
	var me = this;
			
	me.version = '1.1.1';

	me.openModels = [];

	me.envirnonment = {
		staging: {
			host: 'demos.qlik.com',
			prefix: "/",
			port: 443,
			isSecure: true,
			id: 'a361b1c4-2361-4c94-84de-93964e3ce399'
		},
	};

	me.config = me.envirnonment.staging;
	
	me.openApp = function () {		
		var deferred = $q.defer();
		me.app = qlik.openApp(me.config.id, me.config);
		deferred.resolve(true);
		return deferred.promise;
	}
	
	me.openApp();
	
	utility.log('App Service Loaded: ', me.version);
});