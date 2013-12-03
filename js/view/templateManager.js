// Implement templatesManager service.
function templatesManagerExampleUsage() {
  templateManager.load("widgets/person-widget", callback);
  templateManager.loadAll(callback);
  templateManager.template("widgets/person-widget");
}
