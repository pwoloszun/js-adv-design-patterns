// Implement pubSub service using Evented.
function pubSubExampleUsage(pubSub) {
  pubSub.subscribe("buttonClick", function() {
    log("buttonClicked published", arguments);
  });
  pubSub.subscribe("buttonClick", function() {
    log("buttonClicked 2 published", arguments);
  });
  pubSub.subscribe("resultsUpdate", function() {
    log("resultsUpdate published", arguments);
  });


  pubSub.publish("buttonClick", [1, "qq"]);
  pubSub.publish("resultsUpdate", [1, "qq"]);
//  pubSub.unsubscribe("resultsUpdate");
  pubSub.publish("buttonClick");
  pubSub.publish("resultsUpdate");
}

// MessagesController.js
function MessagesController(pubSub) {
  pubSub.subscribe("form:button:click", function(action, user) {
    // display notifications
    console.log(action, user);
  });
}

// FormController.js
function FormController(pubSub) {
  var user = {name: "Bob"};
  // on DOM button click event
  pubSub.publish("form:button:click", ["save", user]);
}

// app.js
function runApp() {
  MessagesController(pubSub);
  FormController(pubSub);
}
//runApp();
