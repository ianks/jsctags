var condense = require('tern/lib/condense');
var interpolate = require('util').format;
var merge = require('deepmerge');
var tryor = require('tryor');
var path = require('path');
var tern = require('tern');
var fs = require('fs');

require('tern-react');

var config = function (dir, file) {
  var config = tryor(function () {
    return fs.readFileSync(path.join(dir, '.tern-project'), 'utf8');
  }, '{}');

  var extname = path.extname(file).replace(/^\./, '');
  var confs = {
    jsx: {
      jsx: {}
    },
    js: {}
  };

  var plugins = {
    doc_comment: true
  };

  return merge(JSON.parse(config), {
    libs: ['browser', 'ecma5'],
    loadEagerly: false,
    plugins: merge(plugins, confs[extname])
  });
};

var defs = function (libs) {
  var base = path.resolve(__dirname, '../node_modules/tern/defs');

  return libs.map(function (lib) {
    if (!/\.json$/.test(lib)) lib = lib + '.json';
    var file = path.join(base, lib);
    if (fs.existsSync(file)) return require(file);
  }).filter(function (lib) {
    return !!lib;
  });
};

var server = function (config, dir) {
  var base = path.resolve(__dirname, '../node_modules/tern/plugin');

  Object.keys(config.plugins).forEach(function (plugin) {
    var file = path.join(base, interpolate('%s.js', plugin));
    if (fs.existsSync(file)) return require(file);
  });

  return new tern.Server({
    async: false,
    defs: defs(config.libs),
    plugins: config.plugins,
    projectDir: dir
  });
};

module.exports = function (dir, file, content, callback) {
  var self = server(config(dir, file), dir);

  self.request({files: [{
    name: file,
    text: content,
    type: 'full'
  }]}, function (e) {
    if (e) throw e;
  });

  self.flush(function (e) {
    if (e) return callback(e);
    callback(null, condense.condense(file, file, {
      spans: true
    }));
  });
};
