import styled from 'styled-components';

export const Button = styled.button`
  background: none;
  border: none;
  align-items: center;

  &.btn-flex {
    display: flex;
  }
  &.btn-padding-10px {
    padding: 10px;
  }
  &.button-primary,
  &.button-outline {
    padding: 1rem;
    transition: background-color 0.2s ease-out;
  }
  &.button-primary {
    background-color: var(--color-green);
    color: white;
    width: 100%;
    &:hover {
      background-color: var(--color-darker-green);
    }

    &:active {
      background-color: var(--color-light-green);
    }
  }

  &.button-outline {
    border: 1px solid black;
    color: var(--color-dark-gray);
    &:hover {
      background-color: var(--color-very-light-gray);
    }
    &:active {
      background-color: var(--color-dark-gray);
      color: white;
    }
  }
`;

export const IconButton = styled(Button)`
  &:active > svg > path {
    fill: var(--color-green);
  }

  &.icon-btn-scaled {
    scale: 1.3;
  }
`;
