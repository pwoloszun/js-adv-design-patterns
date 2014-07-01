//=== "Real Life" example ===

// MessagesController.js
function MessagesController(pubSub) {
  pubSub.subscribe("form:button:click", function(action, user) {
    // display notifications
    console.log("displayNotification() TODO", action, user);
  });
}

// FormController.js
function FormController(pubSub) {
  var user = {name: "Bob"};
  // on DOM button click event
  pubSub.publish("form:button:click", ["save", user]);
}

// Logger.js TODO

// EmailNotifier.js TODO

// app.js
function app(pubSub) {
  MessagesController(pubSub);
  FormController(pubSub);
}

//appPubSubSolution(pubSub);
