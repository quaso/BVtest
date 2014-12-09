angular.module('BV.Controllers').controller("CreateUserController", [ '$scope', function($scope) {
	$scope.password = "startpw";
	$scope.isCollapsed = false;
	$scope.validFrom =[{value: new Date(), format:'dd.MM.yyyy'}];
	$scope.validTo = new Date(2014, 11, 31, 0, 0, 0, 0);
	$scope.minDateValidTo = $scope.validFrom.value;

	$scope.userType = {};
	$scope.userTypes = [ 'group1', 'group2', 'group3', 'group4', 'group5', 'group6' ];

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
		$scope.password = randomstring;
	};

	$scope.defaultPassword = function() {
		$scope.password = "startpw";
	};

	$scope.reset = function() {
		$scope.userType.selected = "";
		$scope.language.selected = "";
	}

	$scope.validFromChanged = function() {
		$scope.minDateValidTo = $scope.validFrom;
	}
} ]);
