angular.module('BV.Controllers').controller("TranslationController", function($scope, $translate) {
	$scope.changeLanguage = function(key) {
		$translate.use(key);
	};
});