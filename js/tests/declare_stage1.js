function declareTestStage1() {
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
  login = 'user';
  passwd = "imba!";
  perms = ["read"];
  instance = new User(login, passwd, perms);
  assertEq(instance.login, login);
  assertEq(instance.getLogin(), login);
}

declareTestStage1();
