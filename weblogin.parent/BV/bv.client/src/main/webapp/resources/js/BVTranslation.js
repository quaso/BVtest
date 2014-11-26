app.config(function($translateProvider) {
	$translateProvider.translations('en', {
		TITLE : 'Hello',
		FOO : 'This is a paragraph.',
		BUTTON_LANG_EN : 'english',
		BUTTON_LANG_DE : 'german',
		CAPTION : 'User management',
		LOGGED_USER_TEXT: 'Logged as: f017mkn'
	});
	$translateProvider.translations('de', {
		TITLE : 'Hallo',
		FOO : 'Dies ist ein Paragraph.',
		BUTTON_LANG_EN : 'englisch',
		BUTTON_LANG_DE : 'deutsch',
		CAPTION : 'Benutzerverwaltung',
		LOGGED_USER_TEXT: 'Angemeldeter Benutzer: f017mkn'
	});
	$translateProvider.preferredLanguage('en');
});
