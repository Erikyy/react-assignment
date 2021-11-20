import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 5px;
  padding-left: 4rem;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  background: none;
  border: 1px solid var(--color-dark-gray);
  font-size: 24px;
  color: var(--color-dark-gray);
  text-align: center;
  text-decoration: none;
  padding: 0 5px;

  &:active {
    background-color: var(--color-dark-gray);
    color: #fff;
  }
`;

export default class CartMenuAmountSelection extends React.Component {
  render() {
    return (
      <Wrapper style={this.props.style}>
        <Button
          onClick={() => {
            this.props.onAddClick();
          }}
        >
          +
        </Button>
        <p
          style={{
            textAlign: 'center',
            paddingBottom: '30px',
            paddingTop: '30px',
          }}
        >
          {this.props.data}
        </p>
        <Button
          onClick={() => {
            this.props.onRemoveClick();
          }}
        >
          -
        </Button>
      </Wrapper>
    );
  }
}
