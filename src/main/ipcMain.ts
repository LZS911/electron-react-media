import { BrowserWindow, ipcMain } from 'electron';

export default function initIpcMain(win: BrowserWindow) {
  ipcMain.on('goBack', (event) => {
    if (!win) {
      throw new Error('"mainWindow" is not defined');
    }
    win.webContents.goBack();
    event.sender.send('canGoBack', {
      back: win.webContents.canGoBack(),
      forward: win.webContents.canGoForward(),
    });
  });

  ipcMain.on('goForward', (event) => {
    if (!win) {
      throw new Error('"mainWindow" is not defined');
    }
    win.webContents.goForward();
    event.sender.send('canGoForward', {
      back: win.webContents.canGoBack(),
      forward: win.webContents.canGoForward(),
    });
  });
}
