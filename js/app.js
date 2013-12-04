function initDeclarativeWidgets() {
  $("*[data-widget]").each(function() {
    var $el = $(this);
    var widget = new DeclarativePersonWidget({
      $el: $el
    });
    widget.render();
  });
}

function initImperativeWidgets() {
  $(".imperative-widget-container").each(function() {
    var $el = $(this);
    var widget = new ImperativePersonWidget();
    widget.render();
    $el.replaceWith(widget.$el);
  });
}

$(function() {
  //initDeclarativeWidgets();
  //initImperativeWidgets();
});
