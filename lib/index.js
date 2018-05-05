var passport = require('passport-strategy')
  , util = require('util')
  , lookup = require('./utils').lookup;

function Strategy(options, verify) {
if (typeof options == 'function') {
    verify = options;
    options = {};
}
if (!verify) { throw new TypeError('LocalStrategy requires a verify callback'); }

this._typeField = options.typeField || 'type';
this._usernameField = options.usernameField || 'username';
this._passwordField = options.passwordField || 'password';

passport.Strategy.call(this);
this.name = 'local';
this._verify = verify;
this._passReqToCallback = options.passReqToCallback;
}

/**
 * Inherit from `passport.Strategy`.
 */
util.inherits(Strategy, passport.Strategy);

/**
 * Authenticate request based on the contents of a form submission.
 *
 * @param {Object} req
 * @api protected
 */
Strategy.prototype.authenticate = function(req, options) {
options = options || {};
var type = lookup(req.body, this._typeField) || lookup(req.query, this._typeField);
var username = lookup(req.body, this._usernameField) || lookup(req.query, this._usernameField);
var password = lookup(req.body, this._passwordField) || lookup(req.query, this._passwordField);

if (!type ||!username || !password) {
    return this.fail({ message: options.badRequestMessage || 'Missing credentials' }, 400);
}

var self = this;

function verified(err, user, info) {
    if (err) { return self.error(err); }
    if (!user) { return self.fail(info); }
    self.success(user, info);
}

try {
    if (self._passReqToCallback) {
    this._verify(req,type, username, password, verified);
    } else {
    this._verify(type,username, password, verified);
    }
} catch (ex) {
    return self.error(ex);
}
};


/**
 * Expose `Strategy`.
 */
module.exports = Strategy;