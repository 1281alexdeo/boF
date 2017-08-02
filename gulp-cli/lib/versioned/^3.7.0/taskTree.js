'use strict';

module.exports = function(tasks) {
  var map = {};
  var arr = [];
  Object.keys(tasks).forEach(function(taskname) {
    var task = { label: taskname, nodes: [], };
    map[taskname] = task;
    arr.push(task);
  });
  Object.keys(tasks).forEach(function(taskname) {
    var task = map[taskname];
    tasks[taskname].dep.forEach(function(childname) {
      var child = map[childname] || { label: childname, nodes: [], };
      task.nodes.push(child);
    });
  });
  return { label: 'Tasks', nodes: arr, };
};
