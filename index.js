var request = require ('request');
var mime = require ('mime');
var path = require ('path');
var fs = require ('fs');

var tempel = 'http://tempel.blankon.in';
var langs = 'bash c cpp css diff html html+django ini java lua make perl php python rst ruby sql text xml yaml'.split(' ');

function upload (options, cb) {

  var text = options.content || fs.readFileSync(options.file);
  var lang = options.lang || 'bash';
  lang = options.file ? mime.lookup (options.file) : 'bash';
  lang = langs.indexOf(lang) >= 0 ? lang : 'bash';

  var r = request({ method : 'POST', url : tempel, followRedirect : false }, cb);
  var form = r.form();

  form.append('language', lang);
  form.append('content', text);  
}

module.exports = function (program, cb) {

  var options = {};
  var text = program.text;
  var lang = program.language;

  program.args = program.args || [];
  options.file = program.args[0];
  options.lang = langs.indexOf(lang) >= 0 ? lang : 'bash';
  

  if (text) {
    options.content = text;
  } 

  if (!options.content && !options.file) {
    process.exit();
  }

  upload (options, function(err, res, body){
    cb (err, { location : res.headers.location});
  });
}