angular.module('BV.Controllers').controller("DatePickerController", [ '$scope', function($scope) {
	$scope.open = function($event) {
		$event.preventDefault();
		$event.stopPropagation();

		$scope.opened = true;
	};

	$scope.dateOptions = {
		formatYear : 'yy',
		startingDay : 1
	};
} ]);