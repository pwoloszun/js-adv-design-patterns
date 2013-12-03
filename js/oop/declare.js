// Implement declare(mixins, customProperties) function.
// Use mixin() function
// Steps:
// 1. detect class constructor function
// 2. if there is base class then setup inheritance
// 3. if there are mixins mix them into result class
// 4. add custom properties
function declareExampleUsage() {
  // User.js
  var User = declare([], {
    constructor: function(login, password, permissions) {
      this.login = login;
      this.password = password;
      this.permissions = permissions;
    },
    getLogin: function() {
      return this.login;
    }
  });

  // SuperUser.js
  var SuperUser = declare([User], {
    getPassword: function() {
      return this.password;
    }
  });
  var su = new SuperUser("su", "#secret", ["read", "write"]);
  log(su.getPassword(), su.getLogin());

  // FancyMessanger.js
  var Greeter = declare([], {
    greet: function() {
      return "Hello " + this.login;
    }
  });

  // Root.js
  var Root = declare([SuperUser, Greeter], {
    getPermissions: function() {
      return this.permissions;
    }
  });
  var root = new Root("root", "#imba!", ["read", "write", "delete"]);
  log(root.getPassword(), root.getLogin(), root.getPermissions(), root.greet());
}
