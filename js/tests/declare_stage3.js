function declareTestStage3() {
  var User = declare([], {
    constructor: function(login, password, permissions) {
      if (arguments.length < 3)
        throw "Missing required args";
      this.login = login;
      this.password = password;
      this.permissions = permissions;
    },
    getLogin: function() {
      return this.login;
    }
  });
  var login, passwd, perms, instance;

  var SuperUser = declare([User], {
    getPassword: function() {
      return this.password;
    }
  });

  var Root = declare([SuperUser], {
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
declareTestStage3();
