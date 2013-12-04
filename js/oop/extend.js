var extend = (function() {
})();

function extendExampleUsage() {
  function User(login) {
    if (arguments.length < 1)
      throw "User: missing required args";
    this.login = login;
  }

  User.prototype.getLogin = function() {
    return this.login;
  };

  User.prototype.setLogin = function(login) {
    this.login = login;
  };

  function SuperUser(login, password) {
    if (arguments.length < 2)
      throw "SuperUser: missing required args";
    this._super("constructor", arguments);
    this.password = password;
  }

  extend(SuperUser, User);

  SuperUser.prototype.getPassword = function() {
    return this.password;
  };

  SuperUser.prototype.setLogin = function(login) {
    log("SU setLogin additional logic...", login);
    return this._super("setLogin", arguments);
  };

  var login = "su", passwd = "#secret", instance = new SuperUser(login, passwd);
  assertEq(instance.login, login);
  assertEq(instance.password, passwd);
  assertEq(instance.getLogin(), login);
  assertEq(instance.getPassword(), passwd);
  login = "batman";
  instance.setLogin(login);
  assertEq(instance.getLogin(), login);


  function Root(login, password, permissions) {
    this._super("constructor", arguments);
    this.permissions = permissions;
  }

  extend(Root, SuperUser);

  Root.prototype.getPermissions = function() {
    return this.permissions;
  };

  Root.prototype.setLogin = function(login) {
    log("Root setLogin additional logic...", login);
    return this._super("setLogin", arguments);
  };

  var permissions = [7, 7, 7];
  login = "root", passwd = "#qq", instance = new Root(login, passwd, permissions);
  assertEq(instance.login, login);
  assertEq(instance.password, passwd);
  assertEq(instance.getLogin(), login);
  assertEq(instance.getPassword(), passwd);
  assertEq(instance.getPermissions().toString(), permissions.toString());


  login = "new_root_login";
  instance.setLogin(login);
  assertEq(instance.getLogin(), login);
}

extendExampleUsage();
