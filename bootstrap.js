/**
 * @fileoverview Bootstrap hook injects the JavaScript code at the end
 * of the Bootstrap script.
 */
define([], function () {
  return function (runtime, params, callback) {
    runtime.readFile('res/add2home.js', function (err, cnt) {
      if (err) return callback(err);
      callback(null, params.content + '\n' + cnt);
    });
  };
});
