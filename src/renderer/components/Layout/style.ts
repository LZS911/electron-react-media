import styled from 'styled-components';
import { ILayoutWrapper } from './index.d';

export const LayoutWrapper = styled.div<ILayoutWrapper>`
  width: 100%;
  height: ${(props) => `calc(100% - ${props.footerHeight}px)`};
  display: flex;
  .sider {
    background-color: #ededed;
    flex-basis: 200px;
  }
  .content {
    flex: 1;
  }
`;
