import React from 'react';
import styled from 'styled-components';
import getSymbolFromCurrency from 'currency-symbol-map';
import { AttributeContainer, AttributeTitle } from '../product/ProductAttribute';
import ChipGroup from '../common/ChipGroup';

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
        {this.props.data.attributes.map((attribute, index) => {
          if (attribute.type === 'swatch') {
            return (
              <AttributeContainer key={String(index)}>
                <AttributeTitle>{attribute.name}:</AttributeTitle>
                <ChipGroup mini swatchGroup data={attribute.items} />
              </AttributeContainer>
            );
          }
          return (
            <AttributeContainer key={String(index)}>
              <AttributeTitle>{attribute.name}:</AttributeTitle>
              <ChipGroup mini data={attribute.items} />
            </AttributeContainer>
          );
        })}
      </Wrapper>
    );
  }
}
