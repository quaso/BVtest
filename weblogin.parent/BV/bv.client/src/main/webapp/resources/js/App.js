var app = angular.module('BVApp', [ 'BV.Controllers', 'BV.Filters', 'pascalprecht.translate', 'ngSanitize',
		'ui.select', 'ui.bootstrap' ]);
angular.module('BV.Controllers', []);

app.config(function($translateProvider) {
	$translateProvider.translations('en', {
		LANG_EN : 'English',
		LANG_DE : 'German',
		CAPTION : 'User management',
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
		ERROR_REQUIRED: 'Required',
		ERROR_INVALID_FORMAT: 'Invalid format'
	});
	$translateProvider.translations('de', {
		LANG_EN : 'Englisch',
		LANG_DE : 'Deutsch',
		CAPTION : 'Benutzerverwaltung',
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
		ERROR_REQUIRED: 'Erforderlich',
		ERROR_INVALID_FORMAT: 'Ungültiges Format'
	});
	$translateProvider.preferredLanguage('en');
});
