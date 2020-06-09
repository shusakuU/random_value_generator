function doGet() {
  return HtmlService.createTemplateFromFile('random').evaluate();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}