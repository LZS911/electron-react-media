import * as React from 'react';
import { ILayoutProps } from './index.d';
import { LayoutWrapper } from './style';

const Layout: React.FC<ILayoutProps> = ({
  Header,
  Sider,
  Content,
  footerHeight = 60,
}) => {
  return (
    <>
      <LayoutWrapper footerHeight={footerHeight}>
        <div className="header">
          <Header />
        </div>
        <div className="wrapper">
          <div className="sider">
            <Sider />
          </div>
          <div className="content">
            <Content />
          </div>
        </div>
      </LayoutWrapper>
    </>
  );
};

export default Layout;
