'use strict';

var util = require('util');
var Logmatic = require('node-logmatic');
var Transport = require('winston').Transport;

function WinstonLogmatic(options) {
  Transport.call(this, options);
  options = options || {};

  this.logmatic = new Logmatic(options.logmatic);
};

util.inherits(WinstonLogmatic, Transport);

// Expose the name of this WinstonLogmatic on the prototype
WinstonLogmatic.prototype.name = 'logmatic';

WinstonLogmatic.prototype.log = function (level, message, meta, callback) {
  if (this.silent) {
    return callback();
  }
  var logMessage = {
    level: level,
    message: message,
    meta: meta
  };

  this.logmatic.log(logMessage);
  callback();
};

module.exports = WinstonLogmatic;
