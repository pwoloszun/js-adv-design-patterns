// implement aop service
function aopExampleUsage() {
  var bob = {
    name: "Bob",
    getName: function() {
      return this.name;
    },
    setName: function(name) {
      this.name = name;
    }
  };

  aop.before(bob, "getName", function() {
    console.log("before getName", arguments);
  });
  aop.after(bob, "getName", function() {
    console.log("after getName", arguments);
  });
  bob.getName();

  aop.before(bob, "setName", function() {
    console.log("before setName", arguments);
  });
  aop.after(bob, "setName", function() {
    console.log("after setName", arguments);
  });

  aop.around(bob, "setName", function() {
    console.log("AROUND before setName", arguments);
    this.yield();
    console.log("AROUND after setName", arguments);
  });

  bob.setName("Bob II");

}

