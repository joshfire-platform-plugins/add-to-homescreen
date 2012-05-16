module.exports = {
  startfile: function(runtime, params, cb) {
    runtime.readFile('res/add2home.css', function(err, cnt) {
      if (err) return cb(err);

      var html = '<style style type="text/css">\n';
      html    += cnt;
      html    += '\n</style></body>';

      cb(null, params['content'].replace(/<\/body>/i, html));
    });
  },
  bootstrap: function(runtime, params, cb) {
    runtime.readFile('res/add2home.js', function(err, cnt) {
      if (err) return cb(err);

      cb(null, params['content'] + cnt);
    });
  }
};
