passport-multi-type extend for passport-local

[![Build](https://travis-ci.org/jaredhanson/passport-local.png)](https://travis-ci.org/jaredhanson/passport-local)
[![Coverage](https://coveralls.io/repos/jaredhanson/passport-local/badge.png)](https://coveralls.io/r/jaredhanson/passport-local)
[![Quality](https://codeclimate.com/github/jaredhanson/passport-local.png)](https://codeclimate.com/github/jaredhanson/passport-local)
[![Dependencies](https://david-dm.org/jaredhanson/passport-local.png)](https://david-dm.org/jaredhanson/passport-local)
[![Tips](http://img.shields.io/gittip/jaredhanson.png)](https://www.gittip.com/jaredhanson/)

[Passport](http://passportjs.org/) strategy for authenticating with a username
and password.

This module lets you authenticate using a username and password in your Node.js
applications.  By plugging into Passport, local authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

```bash
$ npm install passport-multi-type
```

## Usage

#### Configure Strategy

The local authentication strategy authenticates users using a username and
password.  The strategy requires a `verify` callback, which accepts these
credentials and calls `done` providing a user.

```js
passport.use(new LocalStrategy(
  function(type, username, password, done) {
    // ....
  }
));
```

##### Available Options

This strategy takes an optional options hash before the function, e.g. `new LocalStrategy({/* options */, callback})`.

The available options are:

* `typeField` - Optional, defaults to 'type'
* `usernameField` - Optional, defaults to 'username'
* `passwordField` - Optional, defaults to 'password'

Both fields define the name of the properties in the POST body that are sent to the server.

#### Parameters

By default, `LocalStrategy` expects to find credentials in parameters
named username and password. If your site prefers to name these fields
differently, options are available to change the defaults.

    passport.use(new LocalStrategy({
        typeeField: 'type',
        usernameField: 'email',
        passwordField: 'passwd',
        session: false
      },
      function(username, password, done) {
        // ...
      }
    ));

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2018-2028 MicahChiu
