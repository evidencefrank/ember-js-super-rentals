/* eslint-disable */
const path = require('path');

function aliasEmberDirs(appAlias) {
  const emberDirs = [
    '/application', '/array', '/component', '/controller', '/object', '/polyfills',
    '/service', '/routing', '/runloop', '/utils', ''
  ];
  const emberBaseDir = 'node_modules/intellij-emberjs-import-support/@ember';
  return emberDirs.reduce(function(result, dir) {
    result[`@ember${dir}`] = emberBaseDir + dir;
    return result;
  }, appAlias);
}

module.exports = {
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules/intellij-emberjs-import-support/@ember-packages'),
      'node_modules',
    ],
    root: path.resolve(__dirname),
    alias: aliasEmberDirs({
      'myapp': 'app'
      // your application alias folders
      // for example: 'myapp': 'app', will allow you to `import { foo } from 'myapp/bar';`
      // where 'myapp/bar' is located in `app/bar` folder.
    })
  }
};
