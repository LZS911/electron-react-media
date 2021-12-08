export interface IIpcRenderer {
  myPing(): void;
  on(channel: any, func: any): void;
  once(channel: any, func: any): void;
}
export interface IElectronAPI {
  ipcRenderer: IIpcRenderer;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}