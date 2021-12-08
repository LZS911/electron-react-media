import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const HomeWrapper = styled.div`
  height: 100%;
  -webkit-app-region: drag;
  .home-content {
    height: 100%;
    display: flex;
  }
  .home-content-type {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    &:hover {
      cursor: pointer;
      transition: all ease-in 0.1s;
      opacity: 0.9;
      box-shadow: 0px 8px 28px -6px rgba(24, 39, 75, 0.12),
        0px 18px 88px -4px rgba(24, 39, 75, 0.14);
    }
    span {
      appearance: none;
      font-size: 1.3rem;
      padding: 30px 50px;
    }
  }
`;
