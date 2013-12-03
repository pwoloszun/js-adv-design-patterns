// Implement mixin(destination, source) function.
function mixinExampleUsage() {
  function User(login) {
    this.login = login;
  }

  User.prototype.getLogin = function() {
    return this.login;
  };

  // create Encryptable module with encrypt(propertyName)
  mixin(User.prototype, Encryptable);

  var user = new User("bob");
  user.encrypt("login"); // => "some encrypted login"
}
