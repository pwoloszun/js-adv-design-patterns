// Implement Stateful class using Evented
function statefulExampleUsage() {
  var Person = declare([Stateful], {
  });
  var bob = new Person({
    name: "Bob",
    age: 22
  });
  bob.watch("name", function(oldValue, newValue) {
    log("name changed from:", oldValue, "to:", newValue);
  });
  bob.watch("birthDate", function(oldValue, newValue) {
    log("birthDate changed from:", oldValue, "to:", newValue);
  });
  bob.watchAll(function(attributeName, oldValue, newValue) {
    log("Attribute:", attributeName, " changed:", oldValue, newValue);
  });
  bob.set("name", "Bob II");
  bob.set("birthDate", new Date());
  bob.get("name");
  bob.toJSON();
}
