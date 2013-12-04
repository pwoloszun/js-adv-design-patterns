function declareTestStage2() {
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
  login = 'su';
  passwd = "#secret!";
  perms = ["read", "write"];

  instance = new SuperUser(login, passwd, perms);
  assertEq(instance.login, login);
  assertEq(instance.getLogin(), login);
  assertEq(instance.getPassword(), passwd);
}

declareTestStage2();
