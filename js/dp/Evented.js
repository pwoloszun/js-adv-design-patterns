// Implement Evented module which provides methods:
// + on(eventName, listenerFn)
// + trigger(eventName, args)
// + off(eventName)

function eventedExampleUsage(mixin, Evented) {
  var bob = {name: "Bob"};
  mixin(bob, Evented);

  bob.on("xxx", function(number, str) {
    log(this.name, "remove triggered", arguments);
  });

  bob.on("xxx", function() {
    log(this.name, "2nd remove triggered", arguments);
  });

  bob.on("yyy", function(number, str) {
    log(this.name, "YYY was triggered", arguments);
  });

  bob.trigger("xxx", [1, 123, -997]); // logged msg on console

  var ed = {name: "Ed"};
  mixin(ed, Evented);
  ed.trigger("xxx"); // nothing happens

  // bob.off("xxx");
  bob.trigger("xxx", [{}, 997.001]); // nothing logged
}
//eventedExampleUsage(mixin, Evented);
