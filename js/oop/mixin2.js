var mixin = (function() {
})();

function mixinExampleUsage() {
  var bob = {
    xxx: function() {
      log("bob.xxx()");
    }
  };
  var ModuleOne = {
    xxx: function() {
      log("module one xxx()");
    }
  };
  var ModuleTwo = {
    xxx: function() {
      log("module two xxx()");
    }
  };

  mixin.include(bob, ModuleOne);
  mixin.include(bob, ModuleTwo);
  bob.xxx();

  mixin.exclude(bob, ModuleOne);
  bob.xxx();
}

mixinExampleUsage();
