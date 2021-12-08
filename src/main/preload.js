const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  ipcRenderer: {
    async goBack(func) {
      console.log('object');
      ipcRenderer.send('router-go-back');
      ipcRenderer.on('can-go-back', (event, data) => {
        console.log(data);
        func(data);
      });
    },
    async goForward(func) {
      ipcRenderer.send('router-go-forward');
      ipcRenderer.on('can-go-forward', (event, data) => {
        console.log(data);
        func(data);
      });
    },
    myPing() {
      ipcRenderer.send('ipc-example', 'ping');
    },
    on(channel, func) {
      const validChannels = ['ipc-example'];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.on(channel, (event, ...args) => func(...args));
      }
    },
    once(channel, func) {
      const validChannels = ['ipc-example'];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.once(channel, (event, ...args) => func(...args));
      }
    },
  },
});
