angular.module('BV.Controllers').controller('SearchController', function($scope, $modal, $log) {

//	$scope.items = [ 'item1', 'item2', 'item3' ];

	$scope.openModal = function(which) {
		switch (which) {
		case 'user':
			var modalInstance = $modal.open({
				templateUrl : 'searchUserModal.html',
				controller : 'SearchUserModalController',
				size: 'sm',
				resolve : {
					userSearchOptions : function() {
//						return $scope.userSearchOptions;
						return ['name', 'userId', 'format'];
					}
				}
			});

			modalInstance.result.then(function(selectedItem) {
				$scope.selected = selectedItem;
			}, function() {
				$log.info('Modal dismissed at: ' + new Date());
			});

			break;
		}
	};
});

// Please note that $modalInstance represents a modal window (instance)
// dependency.
// It is not the same as the $modal service used above.

angular.module('BV.Controllers').controller('SearchUserModalController', function($scope, $modalInstance, userSearchOptions) {

	$scope.userSearchOptions = userSearchOptions;
	$scope.selected = {
		item : $scope.userSearchOptions[0]
	};

	$scope.ok = function() {
		$modalInstance.close($scope.selected.item);
	};

	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
});