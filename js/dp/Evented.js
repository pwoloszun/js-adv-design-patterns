// Implement Evented module which provides methods:
// + on(eventName, listenerFn)
// + trigger(eventName, args)
// + off(eventName)

function eventedExampleUsage(mixin, Evented) {
  var bob = {name: "Bob"};
  mixin(bob, Evented);

  bob.on("remove", function(number, str) {
    log(this.name, "remove triggered", arguments);
  });

  bob.on("remove", function() {
    log(this.name, "2nd remove triggered", arguments);
  });

  bob.trigger("remove", [1, "qq"]); // logged msg on console

  var ed = {name: "Ed"};
  mixin(ed, Evented);
  ed.trigger("remove"); // nothing happens

  bob.off("remove");
  bob.trigger("remove", [{}, 997.001]); // nothing logged
}
//eventedExampleUsage(mixin, Evented);
