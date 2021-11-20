import React from 'react';
import styled from 'styled-components';
import getSymbolFromCurrency from 'currency-symbol-map';

const Wrapper = styled.div`
  padding: 5px;
`;

export default class CartMenuItemDescription extends React.Component {
  render() {
    const price = this.props.data.prices.find((el) => {
      return el.currency === this.props.activeCurrency;
    });

    return (
      <Wrapper>
        <p>{this.props.data.brand}</p>
        <p>{this.props.data.name}</p>
        <p
          style={{
            paddingTop: '10px',
            fontWeight: 'bold',
          }}
        >{`${getSymbolFromCurrency(price.currency)}${price.amount}`}</p>
      </Wrapper>
    );
  }
}
