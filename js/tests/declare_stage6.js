function declareTestStage6() {
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

  var CustomUser = declare([User, SuperUser], {
    setMyProperty: function(valu) {
      this.myProperty = valu;
    }
  });
  login = 'root';
  passwd = "dev null";
  perms = ["read", "write", "delete"];

  instance = new CustomUser(login, passwd, perms);
  assertEq(instance.login, login);
  assertEq(instance.getLogin(), login);
  assertEq(instance.password, undefined);
  assertEq(instance.permissions, undefined);
  var someProperty = "a qq!";
  instance.setMyProperty(someProperty);
  assertEq(instance.myProperty, someProperty);
}
declareTestStage6();
