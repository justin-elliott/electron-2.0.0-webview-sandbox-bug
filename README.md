# electron 2.0.x <webview> Sandbox Bug

In Electron 2.0.0 and 2.0.1, remote objects are being dereferenced prematurely in a `<webview>` that is both sandboxed, and has a preload script. While the first webpage loaded does not exhibit this problem, subsequent pages will.

This application is a simple demonstration of the issue. It will:

* Open a `BrowserWindow` containing a `<webview>` that loads google.com.
* Open the dev tools for that `BrowserWindow`, so that errors against remote object errors can be seen on that window's console.
* Log object dereferences on stdout.
* Start an interval timer that polls `webview.getId()`.

The Google landing page should not exhibit any errors, with each call to `webview.getId()` succeeding. After navigating to another page, the `<webview>`'s `webContents` will shortly be dereferenced (typically within 5-10 seconds), and errors will be logged.

To verify that this behavior does not occur with sandboxing turned off, or without a preload script, modify the commented section of `lib/index.js`.
