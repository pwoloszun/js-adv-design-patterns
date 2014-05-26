// Implement mixin(destination, source) function.

function mixinClassExampleUsage() {
  function User(login) {
    this.login = login;
  }

  User.prototype.getLogin = function() {
    return this.login;
  };

  // TODO: create Encryptable module (Singleton) with methods:
  // + encrypt(propertyName)
  // + getEncrypted(propertyName)
  mixin(User.prototype, Encryptable);

  var user = new User("bob");
  user.encrypt("login"); // => "some encrypted login"
  user.getEncrypted("login");
}

function mixinInstanceExampleUsage() {
  var bob = {name: "Bob"};

  // TODO: create modules (Singletons):
  // + Teacher with methods: teach()
  // + Dancer with methods: dance()
  var Teacher = {
    teach: function() {
      console.log("teach");
    }
  };

  mixin(bob, Teacher);
  mixin(bob, Dancer);

  bob.teach();
  bob.dance();
}
