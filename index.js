'use strict';

var File = require('vinyl')

module.exports = function imitate(oldFile, newContents, opts) {
  if (!File.isVinyl(oldFile)) oldFile = new File(oldFile)
  
  // file.clone({ contents: false }) only applies to buffers, so
  // temporarily remove contents to prevent unnecessary cloning.
  var oldContents = oldFile.contents
  oldFile.contents = null
  
  var newFile = oldFile.clone(opts)
  
  newFile.contents = newContents || null
  oldFile.contents = oldContents

  return newFile
}
