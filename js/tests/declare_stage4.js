function declareTestStage4() {
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
  var login, passwd, instance;

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
  login = 'su';
  passwd = "#secret!";

  instance = new SuperUser(login, passwd);
  assertEq(instance.login, login);
  assertEq(instance.password, passwd);
  assertEq(instance.getLogin(), login);
  assertEq(instance.getPassword(), passwd);
}
declareTestStage4();
