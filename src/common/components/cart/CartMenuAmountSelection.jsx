import React from 'react';
import styled from 'styled-components';
import { MinusIcon, PlusIcon } from '../../../icons/Icons';

const Wrapper = styled.div`
  padding: 0px;
  padding-left: 4rem;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  justify-content: space-between;
`;

const Button = styled.button`
  background: none;
  border: 1px solid var(--color-dark-gray);
  color: var(--color-dark-gray);

  padding: 6px;
  position: relavtive;
  ${(props) => {
    return props.large
      ? `
      padding: 15px;

      & > svg {
        scale: 2;
      }
    `
      : ``;
  }}
  &:active {
    background-color: var(--color-dark-gray);
  }

  &: active > svg > path {
    fill: #fff;
  }
`;

export default class CartMenuAmountSelection extends React.Component {
  render() {
    return (
      <Wrapper style={this.props.style}>
        <Button
          large={this.props.large}
          onClick={() => {
            this.props.onAddClick();
          }}
        >
          <PlusIcon
            style={{
              display: 'block',
            }}
          />
        </Button>
        <p
          style={{
            textAlign: 'center',
          }}
        >
          {this.props.data}
        </p>
        <Button
          large={this.props.large}
          onClick={() => {
            this.props.onRemoveClick();
          }}
        >
          <MinusIcon
            style={{
              display: 'block',
              paddingBottom: '4px',
              paddingTop: '4px',
            }}
          />
        </Button>
      </Wrapper>
    );
  }
}
