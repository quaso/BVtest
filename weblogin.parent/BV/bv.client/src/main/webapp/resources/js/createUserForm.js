angular.module('BV.Controllers').controller("CreateUserController", [ '$scope', function($scope) {
	$scope.password = "startpw";
	$scope.isCollapsed = false;
	$scope.dateFormat = 'dd.MM.yyyy';
	$scope.validFrom = new Date();
	$scope.validTo = new Date(2014, 11, 31, 0, 0, 0, 0);

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
