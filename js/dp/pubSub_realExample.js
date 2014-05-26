//=== "Real Life" example ===

// MessagesController.js
function MessagesController(pubSub) {
  pubSub.subscribe("form:button:click", function(action, user) {
    // display notifications
    this.displayNotification()
  });
}

// FormController.js
function FormController(pubSub) {
  var user = {name: "Bob"};
  // on DOM button click event
  pubSub.publish("form:button:click", ["save", user]);
}

// app.js - pubsub solution
function appPubSubSolution() {

  MessagesController(pubSub);
  FormController(pubSub);
}

// app.js - Observer solution
function appObserverSolution() {
  formController.on("btnClick", function() {
    messagesController.displayNotification()
  })
}
