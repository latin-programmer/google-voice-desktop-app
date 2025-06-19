const assert = require('assert');
const path = require('path');
const fs = require('fs');
const { joinImports } = require('../src/utils/cssInjector');

const app = { getAppPath: () => path.join(__dirname, '..') };
const themeFile = fs.readFileSync(path.join(app.getAppPath(), 'src', 'themes', 'demo.scss'), 'utf-8');
const result = joinImports(app, themeFile);

assert(result.includes('Dont use !important'), 'base.scss content missing');
assert(result.includes('These mappings may seem'), 'mappings.scss content missing');

console.log('joinImports test passed');
