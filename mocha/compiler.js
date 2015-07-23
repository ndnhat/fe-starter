// Based on https://github.com/Khan/react-components/blob/master/test/compiler.js
import fs from 'fs';
import ReactTools from 'react-tools';

let origJs = require.extensions['.js'];
let reactStub = 'module.exports = require("react").createClass({render:function(){return null;}});';

function shouldStub(filename) {
  if (!global.reactModulesToStub) return false;

  let stubs = global.reactModulesToStub;
  for (let i = 0; i < stubs.length; i++) {
    if (filename.substr(-stubs[i].length) == stubs[i]) {
      return true;
    }
  }
  return false;
}

function transform(filename) {
  if (shouldStub(filename)) {
    return reactStub;
  } else {
    let content = fs.readFileSync(filename, 'utf8');
    return ReactTools.transform(content, {harmony: true});
  }
}

require.extensions['.js'] = function(module, filename) {
  if (filename.indexOf('node_modules/') >= 0) {
    return (origJs || require.extensions['.js'])(module, filename);
  }

  return module._compile(transform(filename), filename);
};
