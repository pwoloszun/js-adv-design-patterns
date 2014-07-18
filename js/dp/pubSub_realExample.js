//=== "Real Life" example ===

// MessagesView.js
function MessagesView() {

  this.displayNotification = function() {
  };
  var that = this;

  pubSub.subscribe("form:button:click", function(action, user) {
    that.displayNotification();
  });
}

// FormView.js
function FormView() {

  this.onBtnClick = function() {
    var user = {name: "Bob"};
    // on DOM button click event
    pubSub.publish("form:button:click", ["save", user]);
  };
}

// pub/sub solution
function app() {
  var messagesView = new MessagesView();
  var formView = new FormView();

  // ...
  formView.onBtnClick();
}

// Observer/Evented solution
function app() {
  var messagesView = new MessagesView();
  var formView = new FormView();

  formView.on("btn:clicked", function() {
    messagesView.displayNotification();
  });

  // ...
  formView.onBtnClick();
}
