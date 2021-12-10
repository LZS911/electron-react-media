import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  /* Adapt the colors based on primary prop */
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const HeaderWrapper = styled.header`
  height: 50px;
  display: flex;
  -webkit-app-region: drag;
  background-color: #f5f5f5;
  flex-basis: 200px;
  .arrow-content {
    width: 60px;
    margin-left: 130px;
    padding: 14px 0;
    display: flex;
  }
  .arrow {
    width: 8px;
    height: 8px;
    border-top: 1px solid rgb(68, 68, 68, 0.55);
    border-left: 1px solid rgb(68, 68, 68, 0.55);
  }

  .arrow-wrapper {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .left-wrapper {
    padding-left: 4px;

    &:hover {
      background-color: #e8e8e8;
    }
    .arrow-left {
      transform: rotate(-45deg);
    }
  }
  .right-wrapper {
    padding-right: 4px;
    margin-left: 10px;
    &:hover {
      background-color: #e8e8e8;
    }
    .arrow-right {
      transform: rotate(135deg);
    }
  }
  .disabled-wrapper {
    pointer-events: none;
    opacity: 0.3;
  }
`;
