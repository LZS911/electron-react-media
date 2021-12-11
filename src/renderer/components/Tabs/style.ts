import styled from 'styled-components';

export const TabsWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  .tab-item {
    color: #6e6e6e;
    font-size: 14px;
    padding: 5px 20px;
    cursor: pointer;
  }
  .tab-item-active {
    color: #000;
  }
`;
