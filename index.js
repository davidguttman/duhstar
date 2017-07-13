#!/usr/bin/env node

var path = require('path')
var exec = require('child_process').exec
var sortBy = require('lodash.sortby')

var dir = process.argv[2] || './'
var cmd = 'du -hs ' + path.join(dir, '*')

var child = exec(cmd, function(err, stdout, stderr) {
  var lines = stdout.split('\n')
  var sorted = sortBy(lines, function(line) {
    var match = line.match(/^\s?(\d+\.?\d?\w)/)
    var val = match && match[1]
    if (!val) return 0

    var mChar = val[val.length-1]
    var mult = mults[mChar]
    var bytes = mult * parseFloat(val)
    return bytes
  })
  console.log(sorted.join('\n'))
})

var mults = {
    K: Math.pow(10, 3)
  , M: Math.pow(10, 6)
  , G: Math.pow(10, 9)
  , T: Math.pow(10, 12)
  , P: Math.pow(10, 15)
}
