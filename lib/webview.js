const webview = document.querySelector('webview');

webview.addEventListener('dom-ready', () => {
  setInterval(() => {
    try {
      console.log(`webview id: ${webview.getId()}`);
    } catch (err) {
      console.error(`Unable to retrieve webview id: ${err}`);
    }
  }, 1000);
});
