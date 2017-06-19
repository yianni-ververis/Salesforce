';use strict';

/**
 * @name myApp.directive: dropDown
 * @author yianni.ververis@qlik.com
 * @param {object} dimension - Field to get the data from
 * @param {string} id - Div id for scope manipulation
 * @param {string} title - Initial text for the dropdown
 * @example As a Qlik Sense filter
 * <drop-down dimension="'System'" id="System" title="All Countries" multiple-selections="true" listen-to-selections="true" selected-on-title="true"></drop-down>
 * @example As a Menu
 * <drop-down dimension="'System'" selected-on-title="true" listen-to-selections="true" id="Salespeople" title="All Sales People"></drop-down>
 * @description
 * A simple bootstrap Drop Down for either multiple selections like Qlik Sense filter or one selection as a Menu
 */

var directive = ($parse, $sce, $compile, $timeout, api, qlik) => {
	var me = {
		def: {
			restrict: 'AE',
			transclude: true
		}
	};

	me.boot = () => {
		// Get all the attributes
		me.def.scope = {
			dimension: '=',
			multipleSelections: '=',
			listenToSelections: '=',
			selectedOnTitle: '=',
			title: '@',
			keepOpen:'='
		};

		me.def.link = function (scope, element, attr) {
			scope.items = {};
			scope.currentItem = {
				qText: scope.title
			};
			scope.$watch('dimension', (newValue) => {
				scope.noClose = (angular.isUndefined(scope.keepOpen) || !scope.keepOpen) ? false : true;	
				if (scope.listenToSelections) {
					api.createList(newValue, data => {
						scope.items = data;
						let selected = [];
						angular.forEach(data, (value, key) => {
							if (value[0].qState==='S') {
								selected.push(value[0])
							}
							// Remove null values 
							// @TODO - there must be a way from the app.createList parameters
							if (angular.isUndefined(value[0].qText)) {
								scope.items.splice(key, 1)
							}
						})
						if (!selected.length) {
							scope.currentItem.qText = scope.title;
						} else if (selected.length==1 && scope.selectedOnTitle) {
							scope.currentItem.qText = selected[0].qText;
						} else if (selected.length > 1 && scope.selectedOnTitle) {
							// scope.currentItem.qText = `${newValue}: ${selected.length} of ${scope.items.length}`;
							scope.currentItem.qText = `${selected.length} of ${scope.items.length} Selected`;
						}
					})
				} else {
					api.getHyperCubeQ([newValue], []).then((data) => {
						scope.items = data;
					})
				}
				if(scope.noClose) {	
					element.on('hide.bs.dropdown', function () {
						return false;
					})
					$('body').on('click', function (e) {
						if (!element.find('.dropdown-menu a').is(e.target)) {
							element.find('.show').removeClass('show');
						}
					});
				} else {
					element.on('hide.bs.dropdown', function () {
						element.find('.show').removeClass('show');
					})
				}
			});
			scope.dropDownChangeTitle = (obj) => {
				qlik.app.field(scope.dimension).select([obj.qElemNumber], scope.multipleSelections, false)
			}
		};

		me.def.templateUrl = 'js/directives/dropDown/dropDown.html';

		return me.def;
	}

	return me.boot();
}
angular.module('directive.dropDown', []);
directive.$inject = ['$parse', '$sce', '$compile', '$timeout', 'api', 'qlik'];
angular.module('directive.dropDown')
	.directive('dropDown', directive);