// Implement mixin(destination, source) function.
function mixinExampleUsage() {
  function User(login) {
    this.login = login;
  }

  User.prototype.getLogin = function() {
    return this.login;
  };

  // create Encryptable module with methods:
  // + encrypt(propertyName)
  // + getEncrypted(propertyName)
  mixin(User.prototype, Encryptable);

  var user = new User("bob");
  user.encrypt("login"); // => "some encrypted login"
}

function mixinExampleUsage() {
  var bob = {name: "Bob"};

  // create modules:
  // + Teacher with methods: teach()
  // + Dancer with methods: dance()
  mixin(bob, Teacher);
  mixin(bob, Dancer);

  bob.teach();
  bob.dance();
}
