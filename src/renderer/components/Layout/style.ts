import styled from 'styled-components';
import { ILayoutWrapper } from './index.type';

export const LayoutWrapper = styled.div<ILayoutWrapper>`
  width: 100%;
  height: ${(props) => `calc(100% - ${props.footerHeight}px)`};
  .header {
    width: 100%;
  }
  .wrapper {
    height: 100%;
    display: flex;
    .sider {
      background-color: #ededed;
      flex-basis: 200px;
    }
    .content {
      flex: 1;
    }
  }
`;
