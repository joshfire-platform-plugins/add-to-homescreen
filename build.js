module.exports = {
  startfile: function(runtime, params, callback) {
    cb(null, params['content']); return;

    /*runtime.readFile('res/add2home.css', function(err, cnt) {
      if (err) return callback(err);

      var html = '<style style type="text/css"></style>\n';
      html    += ctn;
      html    += '\n</style></body>';

      callback(null, params['content'].replace(/<\/body>/i, html));
    });*/
  },
  bootstrap: function(runtime, params, callback) {
    cb(null, params['content']); return;

    /*runtime.readFile('res/add2home.js', function(err, cnt) {
      if (err) return callback(err);

      callback(null, params['content'] + ctn);
    });*/
  }
};
