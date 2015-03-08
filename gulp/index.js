var fs = require('fs')
  , onlyScripts = require('./util/script-filter')
  , tasks = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);

tasks.forEach(function(task) {
  require('./tasks/' + task);
});