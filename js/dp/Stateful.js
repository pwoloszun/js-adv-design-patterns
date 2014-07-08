// Implement Stateful role (Singleton)
// Reuse: mixin and Evented role
function statefulExampleUsage(mixin, Stateful) {
  var bob = {};
  mixin(bob, Stateful);

  bob.watch("name", function(oldValue, newValue) {
    log("name changed from:", oldValue, "to:", newValue);
  });
  bob.watch("birthDate", function(oldValue, newValue) {
    log("birthDate changed from:", oldValue, "to:", newValue);
  });
  bob.watchAll(function(attributeName, oldValue, newValue) {
    log("Attribute:", attributeName, " changed:", oldValue, newValue);
  });
  bob.set("name", 123);
  bob.set("birthDate", new Date());
  bob.get("name");

//  bob.toJSON();
}
