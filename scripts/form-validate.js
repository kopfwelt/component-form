const $ = require('jquery');
window.jQuery = $;
// require('parsleyjs/src/i18n/es.js');
require('parsleyjs');
// window.Parsley.setLocale('es');

class FormValidated {
	constructor() {
		console.log('FormValidated');
	}
}

module.exports = FormValidated;
