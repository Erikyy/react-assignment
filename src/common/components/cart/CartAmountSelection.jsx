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

  & > .menu-amount {
    text-align: center;
  }

  ${(props) => (props.large ? 'font-size: 24pt;' : '')}
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
      padding: 25px;

      & > svg {
        
        stroke-width: 0.5;
        scale: 3;
        
      }
    `
      : ``;
  }}
  &:active {
    background-color: var(--color-dark-gray);
  }

  &:active > svg > path {
    fill: #fff;
    stroke: #fff;
  }

  & > .plus-icon {
    display: block;
  }

  & > .minus-icon {
    display: block;
    padding-bottom: 4px;
    padding-top: 4px;
  }
`;

export default class CartAmountSelection extends React.Component {
  render() {
    return (
      <Wrapper large={this.props.large}>
        <Button
          large={this.props.large}
          onClick={() => {
            this.props.onAddClick();
          }}
        >
          <PlusIcon className="plus-icon" />
        </Button>
        <p className="menu-amount">{this.props.data}</p>
        <Button
          large={this.props.large}
          onClick={() => {
            this.props.onRemoveClick();
          }}
        >
          <MinusIcon className="minus-icon" />
        </Button>
      </Wrapper>
    );
  }
}
