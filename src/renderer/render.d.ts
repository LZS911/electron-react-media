export interface IIpcRenderer {
  myPing(): void;
  on(channel: any, func: any): void;
  once(channel: any, func: any): void;
  goBack(): void;
  goForward(): void;
  canGoBackOrForward(setData: React.Dispatch<React.SetStateAction<any>>): void;
}
export interface IElectronAPI {
  ipcRenderer: IIpcRenderer;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
