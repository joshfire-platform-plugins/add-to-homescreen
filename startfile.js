/**
 * @fileoverview Startfile hook injects the CSS code at the end
 * of the <head> tag of the startfile or at the beginning of the
 * <body> tag if the <head> is not defined for some reason.
 */
define([], function () {
  return function (runtime, params, callback) {
    runtime.readFile('res/add2home.css', function (err, cnt) {
      if (err) return callback(err);

      params.content = runtime.headAppend(params.content,
        '<style type="text/css">\n' + cnt + '\n</style>');
      callback(null, params.content);
    });
  };
});
