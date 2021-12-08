import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  /* Adapt the colors based on primary prop */
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  -webkit-app-region: no-drag;
`;

export const HeaderWrapper = styled.header`
  height: 50px;
  background-color: #eee;
  -webkit-app-region: drag;
`;
