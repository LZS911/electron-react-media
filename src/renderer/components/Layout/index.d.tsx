export interface ILayoutProps {
  Sider: React.FC;
  Content: React.FC;
  footerHeight?: number;
}

export interface ILayoutWrapper {
  footerHeight: number;
}
