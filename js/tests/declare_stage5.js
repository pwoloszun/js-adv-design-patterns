function declareTestStage5() {
  var User = declare([], {
    constructor: function(login) {
      if (arguments.length < 1)
        throw "Missing required args";
      this.login = login;
    },
    getLogin: function() {
      return this.login;
    }
  });
  var login, passwd, instance, perms;

  var SuperUser = declare([User], {
    constructor: function(login, password) {
      if (arguments.length < 2)
        throw "SU: Missing required args";
      this.password = password;
    },
    getPassword: function() {
      return this.password;
    }
  });

  var Root = declare([SuperUser], {
    constructor: function(login, password, permissions) {
      if (arguments.length < 3)
        throw "Root: Missing required args";
      this.permissions = permissions;
    },
    getPermissions: function() {
      return this.permissions;
    }
  });
  login = 'root';
  passwd = "dev null";
  perms = ["read", "write", "delete"];

  instance = new Root(login, passwd, perms);
  assertEq(instance.login, login);
  assertEq(instance.getLogin(), login);
  assertEq(instance.getPassword(), passwd);
  assertEq(instance.getPermissions().join("|"), perms.join("|"));
}
declareTestStage5();
