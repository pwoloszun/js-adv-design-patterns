var Teacher = {};
Teacher.teach = function() {};

// Implement Evented module
function eventedExampleUsage() {
  var evented = {name: "Bob"};
  mixin(evented, Evented);

  evented.on("remove", function() {
    log("remove triggered", arguments);
//    observer1.doSomething();
  });
  evented.on("remove", function() {
    log("2nd remove triggered", arguments);
//    observer2.doSomethingElse();
  });
  evented.trigger("remove", [1, "qq"]); // loged msg on console

  var ed = {name: "Ed"};
  mixin(ed, Evented);
  ed.trigger("remove"); // nothing happens

  evented.off("remove");
  evented.trigger("remove", [{}, 997.001]); // nothing logged
}
