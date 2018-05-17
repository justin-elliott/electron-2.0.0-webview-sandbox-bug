const {app, BrowserWindow, ipcMain} = require('electron');

app.once('ready', () => {
  const win = new BrowserWindow({
    width: 1024,
    height: 768
  });
  win.loadURL(`file://${__dirname}/index.html`);
  win.openDevTools();

  win.webContents.on('will-attach-webview', (event, webPreferences, params) => {

    // =========================================================================
    // Here is the relevant section. With sandbox set to false, or no preload
    // script, the webContents will not be prematurely dereferenced.
    // =========================================================================
    webPreferences.sandbox = true;
    webPreferences.preloadURL = `file://${__dirname}/preload.js`;
    // =========================================================================
  });
});

ipcMain.on('ELECTRON_BROWSER_DEREFERENCE', (event, id) => {
  console.log(`Dereference sender: ${event.sender.getId()}, id: ${id}`);
});
