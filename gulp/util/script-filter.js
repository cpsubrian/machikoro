var path = require('path');

// Filters out non .jsx and .js files. Prevents
// accidental inclusion of possible hidden files
module.exports = function(name) {
  return /(\.(js|jsx)$)/i.test(path.extname(name));
};