import styled from 'styled-components';

export const Button = styled.button`
  background: none;
  border: none;
  align-items: center;
`;

export const IconButton = styled(Button)`
  &:active > svg > path {
    fill: var(--color-green);
  }
`;

export const ButtonPrimary = styled.button`
  background: none;
  border: none;
  align-items: center;
  background-color: var(--color-green);
  color: white;
  padding: 1rem;
`;

export const ButtonOutline = styled.button`
  background: none;
  border: 1px solid black;
  padding: 1rem;
  align-items: center;
`;
