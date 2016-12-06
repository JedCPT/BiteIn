// Personal information.

 chrome.browserAction.onClicked.addListener(function(tab) {

   // Call the main.js file when the extension button is clicked.
   chrome.tabs.executeScript(null, {file: "main.js" }, null);

 });
