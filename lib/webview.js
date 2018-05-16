const webview = document.querySelector('webview');

webview.addEventListener('did-navigate', () => {
  setTimeout(() => webview.findInPage('search'), 2000);
});

webview.addEventListener('found-in-page', (event) => {
  console.log(`matches: ${event.result.matches}`);
});
