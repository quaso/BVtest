var CreateUserController = function($scope) {
	$scope.isCollapsed = false;
	$scope.dateFormat = 'dd.MM.yyyy';
	$scope.today = new Date();
	$scope.validFrom = $scope.today;
	$scope.validTo = new Date(9999, 11, 31, 0, 0, 0, 0);
	$scope.opened = [ false, false ];
	$scope.submitted = false;
	$scope.user = [];

	$scope.userTypes = [ 'group1', 'group2', 'group3', 'group4', 'group5', 'very long long group6' ];

	$scope.language = {};
	$scope.languages = [ {
		id : 'EN',
		text : 'LANG_EN'
	}, {
		id : 'DE',
		text : 'LANG_DE'
	} ];

	$scope.generatePassword = function() {
		var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
		var string_length = 10;
		var randomstring = '';
		for (var i = 0; i < string_length; i++) {
			var rnum = Math.floor(Math.random() * chars.length);
			randomstring += chars.substring(rnum, rnum + 1);
		}
		$scope.user.password = randomstring;
	};

	$scope.defaultPassword = function() {
		$scope.user.password = "startpw";
	};

	$scope.reset = function() {
		$scope.userType.selected = "";
		$scope.language.selected = "";
		$scope.submitted = false;
	}

	$scope.open = function($event, id) {
		$event.preventDefault();
		$event.stopPropagation();

		$scope.opened[id] = true;
	};

	$scope.fromDateOptions = {
		formatYear : 'yy',
		startingDay : 1
	};

	$scope.toDateOptions = {
		formatYear : 'yy',
		startingDay : 1
	};

	// function to submit the form after all validation has occurred
	$scope.submitForm = function(isValid) {
		$scope.submitted = true;
	}

	$scope.defaultPassword();
};

angular.module('BV.Controllers').controller("CreateUserController", [ '$scope', CreateUserController ]);
