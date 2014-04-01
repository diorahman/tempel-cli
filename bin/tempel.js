#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander');
var tempel = require('../');

program
  .version('0.0.1')
  .option('-l, --language <lang>', 'Set language')
  .option('-t, --text <text>', 'From text')
  .parse(process.argv);

tempel(program, function (err, data){
  if (err) {
    console.log ('gagal euy! maap <3');
  } else {
    console.log(data.location);
    console.log('<3');
  }
  process.exit();
});