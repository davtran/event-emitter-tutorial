const EventEmitter = require('events');

function fileSize(fileName, cb) {
  if (typeof fileName !== 'string') {
    return cb(new TypeError('argument should be string')); // sync
  }

  fs.stat(fileName, (err, stats) => {
    if (err) {
      return cb(err);
    } // Async

    cb(null, stats.size); // Async
  });
}

module.exports = {
  fileSize,
};
