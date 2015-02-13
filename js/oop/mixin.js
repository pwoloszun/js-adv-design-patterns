// TODO: implement mixin(destination, source) function.

function mixinInstanceExampleUsage(mixin) {
  var bob = {name: "Bob"};

  // TODO: create modules (Singletons):
  // + DancerRole with methods: dance()
  var TeacherRole = {
    teach: function() {
      console.log("teach", this);
      // this.teachingSkill === 1
    }
  };

  mixin(bob, TeacherRole);
  mixin(bob, DancerRole);

  bob.teach();
  bob.dance(); // logs "dance"
}
//mixinInstanceExampleUsage(mixin);


function mixinClassExampleUsage(mixin) {
  function User(login) {
    this.login = login;
  }

  User.prototype.getLogin = function() {
    return this.login;
  };

  var EncryptableRole = {
    encrypt: function(propertyName) {
      log("encrypt", arguments);
    },
    getEncrypted: function(propertyName) {
      log("getEncrypted", arguments);
    }
  };
  mixin(User.prototype, EncryptableRole);

  var user = new User("bob");
  user.encrypt("login"); // => "some encrypted login"
  user.getEncrypted("login");
}
//mixinClassExampleUsage(mixin);
