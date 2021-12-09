const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  ipcRenderer: {
    async goBack(func) {
      ipcRenderer.send('goBack');
      ipcRenderer.on('canGoBack', (event, data) => {
        func(data);
      });
    },
    async goForward(func) {
      ipcRenderer.send('goForward');
      ipcRenderer.on('canGoForward', (event, data) => {
        func(data);
      });
    },
  },
});
