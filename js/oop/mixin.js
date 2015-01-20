// Implement mixin(destination, source) function.

function mixinClassExampleUsage(mixin) {
  function User(login) {
    this.login = login;
  }

  User.prototype.getLogin = function() {
    return this.login;
  };

  var Encryptable = {
    encrypt: function(propertyName) {
      log("encrypt", arguments);
    },
    getEncrypted: function(propertyName) {
      log("getEncrypted", arguments);
    }
  };
  mixin(User.prototype, Encryptable);

  var user = new User("bob");
  user.encrypt("login"); // => "some encrypted login"
  user.getEncrypted("login");
}
//mixinClassExampleUsage(mixin);

function mixinInstanceExampleUsage(mixin) {
  var bob = {name: "Bob"};

  // TODO: create modules (Singletons):
  // + Dancer with methods: dance()
  var Teacher = {
    teach: function() {
      console.log("teach", this);
      // this.teachingSkill === 1
    }
  };

  mixin(bob, Teacher);
  mixin(bob, Dancer);

  bob.teach();
  bob.dance(); // logs "dance"
}
//mixinInstanceExampleUsage(mixin);
