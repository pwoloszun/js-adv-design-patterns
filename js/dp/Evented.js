// Implement Evented module
function eventedExampleUsage() {
  var evented = {name: "Bob"};
  mixin(evented, Evented);
  evented.on("remove", function() {
    log("remove triggered", arguments);
  });
  evented.on("remove", function() {
    log("2nd remove triggered", arguments);
  });
  evented.trigger("remove", [1, "qq"]); // loged msg on console
  evented.off("remove");
  evented.trigger("remove", [1, "qq"]); // nothing logged
}
