var TranslationController = function($scope, $translate) {
	$scope.changeLanguage = function(key) {
		$translate.use(key);
	};
};

angular.module('BV.Controllers').controller("TranslationController", TranslationController);