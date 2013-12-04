function declareTestStage7() {
  var User = declare([], {
    constructor: function(login) {
      this.login = login;
    },
    getLogin: function() {
      return this.login;
    }
  });

  // SuperUser.js
  var SuperUser = declare([User], {
    constructor: function(login, password) {
      this.password = password;
    },
    getPassword: function() {
      return this.password;
    }
  });

  // FancyMessanger.js
  var Greeter = declare([], {
    greet: function() {
      return "Hello " + this.login;
    }
  });

  // Root.js
  var Root = declare([SuperUser, Greeter], {
    constructor: function(login, password, permissions) {
      this.permissions = permissions;
    },
    getPermissions: function() {
      return this.permissions;
    }
  });

  var login = "root", passwd = "!imba!", perms = ["read", "write", "delete"]; 
  var root = new Root(login, passwd, perms);

  assertEq(root.login, login);
  assertEq(root.getLogin(), login);
  assertEq(root.password, passwd);
  assertEq(root.permissions, perms);
  assertEq(root.greet(), "Hello " + login);
}
declareTestStage7();
