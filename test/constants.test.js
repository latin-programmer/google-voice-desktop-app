const assert = require('assert');
const constants = require('../src/constants');

assert.strictEqual(constants.APPLICATION_NAME, 'Voice Desktop');
assert.strictEqual(constants.URL_GOOGLE_VOICE, 'https://voice.google.com');
assert.strictEqual(constants.DEFAULT_SETTING_SHOW_MENU_BAR, true);

console.log('constants test passed');
