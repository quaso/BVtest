var app = angular.module('BVApp', [ 'BV.Controllers', 'pascalprecht.translate', 'ngSanitize', 'ngRoute',
		'ui.bootstrap' ]);
angular.module('BV.Controllers', []);

app.config([ '$routeProvider', function($routeProvider) {

	$routeProvider.when('/welcome', {
		templateUrl : 'welcome/layout',
		controller : WelcomeController
	});

	$routeProvider.when('/createUserLayout', {
		templateUrl : 'user/add/layout',
		controller : CreateUserController
	});

	$routeProvider.otherwise({
		redirectTo : '/welcome'
	});
} ]);

app
		.config(function($translateProvider) {
			$translateProvider
					.translations(
							'en',
							{
								CAPTION : 'Users management',
								MENU_USERS : 'Users',
								MENU_USERS_SEARCH : 'Search',
								MENU_USERS_CREATE : 'Create',
								MENU_USERS_UPLOAD : 'Upload',
								MENU_GROUPS : 'Groups',
								MENU_GROUPS_SEARCH : 'Search',
								MENU_GROUPS_CREATE : 'Create',
								MENU_PROFILES : 'Profiles',
								MENU_PROFILES_SEARCH : 'Search',
								MENU_PROFILES_CREATE : 'Create',
								LANG_EN : 'English',
								LANG_DE : 'German',
								LOGGED_USER_TEXT : 'Logged as: ',
								LABEL_FIRST_NAME : 'First name',
								LABEL_LAST_NAME : 'Last name',
								LABEL_USER_ID : 'User id',
								LABEL_USER_TYPE : 'User type',
								LABEL_EMAIL : 'Email',
								LABEL_INIT_PWD : 'Initial password',
								LABEL_LANGUAGE : 'Language',
								LABEL_VALID_FROM : 'Account valid from',
								LABEL_VALID_TO : 'Account valid to',
								LABEL_PHONE : 'Phone',
								LABEL_COMMENT : 'Comment / description',
								BUTTON_GENERATE : 'Generate',
								BUTTON_DEFAULT : 'Default',
								BUTTON_CREATE : 'Create',
								BUTTON_CANCEL : 'Cancel',
								CAPTION_OPTIONAL_PARAMETERS : 'Optional parameters',
								ERROR_REQUIRED : 'Required',
								ERROR_INVALID_FORMAT : 'Invalid format',
								MSG_WELCOME : 'Welcome',
								MSG_WELCOME_TEXT : 'This is a brand new User management application. Currently it is under development, so please apologize any minor bugs :)',
								SEARCH_USER_CAPTION: 'Search user'
							});
			$translateProvider
					.translations(
							'de',
							{
								CAPTION : 'Benutzerverwaltung',
								MENU_USERS : 'Benutzer',
								MENU_USERS_SEARCH : 'Suchen',
								MENU_USERS_CREATE : 'Erschaffen',
								MENU_USERS_UPLOAD : 'Laden',
								MENU_GROUPS : 'Gruppen',
								MENU_GROUPS_SEARCH : 'Suchen',
								MENU_GROUPS_CREATE : 'Erschaffen',
								MENU_PROFILES : 'Profile',
								MENU_PROFILES_SEARCH : 'Suchen',
								MENU_PROFILES_CREATE : 'Erschaffen',
								LANG_EN : 'Englisch',
								LANG_DE : 'Deutsch',
								LOGGED_USER_TEXT : 'Angemeldeter Benutzer: ',
								LABEL_FIRST_NAME : 'Vorname',
								LABEL_LAST_NAME : 'Nachname',
								LABEL_USER_ID : 'User-ID',
								LABEL_USER_TYPE : 'Usertyp',
								LABEL_EMAIL : 'E-Mail-Adresse',
								LABEL_INIT_PWD : 'Initialpasswort',
								LABEL_LANGUAGE : 'Sprachkennzeichen',
								LABEL_VALID_FROM : 'Beginn Zugriff',
								LABEL_VALID_TO : 'Ende Zugriff',
								LABEL_PHONE : 'Telefon',
								LABEL_COMMENT : 'Kommentar / Beschreibung',
								BUTTON_GENERATE : 'Generieren',
								BUTTON_DEFAULT : 'Standard',
								BUTTON_CREATE : 'Speichern',
								BUTTON_CANCEL : 'Abbrechen',
								CAPTION_OPTIONAL_PARAMETERS : 'Optionale Parameter',
								ERROR_REQUIRED : 'Erforderlich',
								ERROR_INVALID_FORMAT : 'Ungültiges Format',
								MSG_WELCOME : 'Willkommen',
								MSG_WELCOME_TEXT : 'Dies ist ein ganz neues Benutzerverwaltung-Anwendung. Derzeit wird in der Entwicklung, also bitte entschuldigen kleinere Fehler :)',
								SEARCH_USER_CAPTION: 'Suche Benutzer'
							});
			$translateProvider.preferredLanguage('en');
		});
