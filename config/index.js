var path = require('path');
var fs = require('fs');
var extend = require('extend');

function read(dir) {

  var conf = {};
  fs.readdirSync(dir).forEach(function (file) {
    var ext = path.extname(file);
    if (ext && ['.js', '.json'].indexOf(ext) != -1) {
      var name = path.basename(file, ext);
      conf[name] = extend(conf[name] || {}, require(path.join(dir, file)));
    }
  });
  return conf;
}



var envs = {
  dev: 'development',
  development: 'development',
  prod: 'production',
  production: 'production',
  staging: 'staging',
  test: 'staging'
}, env = envs.dev;

if (process.env.NODE_ENV && process.env.NODE_ENV in envs) {
  env = envs[process.env.NODE_ENV];
}

console.info('loading env :' + env);
module.exports = read(path.join(__dirname, env));