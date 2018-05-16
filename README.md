# electron 2.0.0 <webview> Sandbox Bug

In Electron 2.0.0, remote objects are being dereferenced prematurely in a `<webview>` that is both sandboxed, and has a preload script.

This application is a simple demonstration of the issue. It will:

* Open a `BrowserWindow` containing a `<webview>` that loads google.com.
* Open the dev tools for that `BrowserWindow`, so that errors against remote object errors can be seen on that window's console.
* Log object dereferences on stdout.
* Respond to `did-navigate` events from the `<webview>` by attempting a `findInPage` operation for the word 'search'. This is delayed by ~2s, which is usually sufficient for remote object dereferences to occur.

Typically, only 1-2 Google searches will be required to see remote objects being dereferenced. The `<webview>`'s `webContents` is almost certainly going to be among those, and errors will then be printed on the `BrowserWindow`'s console from the failed `findInPage` call.

To verify that this behavior does not occur with sandboxing turned off, or without a preload script, modify the commented section of `lib/index.js`.
