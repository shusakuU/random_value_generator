function doGet() {
  return HtmlService.createHtmlOutputFromFile('random');
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}