function renderTemplate() {
  var json = {
    name: "Bob",
    age: 12,
    linkLabel: "Click me!",
    url: "http://google.pl"
  };

  // TODO
  var html = "TODO: generate html using templates and given JSON data";

  $(".template-intro-cont").html(html);
}

$(function() {
  renderTemplate();
});
