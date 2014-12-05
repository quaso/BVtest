angular
		.module('BV.Controllers', [])
		.controller(
				"CreateUserController",
				[
						'$scope',
						function($scope) {
							$scope.password = "startpw";

							$scope.generatePassword = function() {
								var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
								var string_length = 10;
								var randomstring = '';
								for (var i = 0; i < string_length; i++) {
									var rnum = Math.floor(Math.random()
											* chars.length);
									randomstring += chars.substring(rnum,
											rnum + 1);
								}
								$scope.password = randomstring;
							};

							$scope.defaultPassword = function() {
								$scope.password = "startpw";
							};
						} ]);