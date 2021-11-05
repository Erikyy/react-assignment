import styled from 'styled-components';

export const Button = styled.button`
  background: none;
  border: none;
  align-items: center;

  &:active {
    background-color: var(--color-green);
  }
`;

export const IconButton = styled(Button)`
  &:active > svg > path {
    fill: var(--color-green);
  }
`;
