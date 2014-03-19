// Implement pubSub service using Evented.
function pubSubExampleUsage() {
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
  pubSub.unsubscribe("resultsUpdate");
  pubSub.publish("buttonClick");
  pubSub.publish("resultsUpdate");
}
