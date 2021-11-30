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
    const price = this.props.data.data.prices.find((el) => {
      return el.currency === this.props.activeCurrency;
    });

    return (
      <Wrapper>
        <p>{this.props.data.data.brand}</p>
        <p>{this.props.data.data.name}</p>
        <p className="cart-menu-price">{`${getSymbolFromCurrency(price.currency)}${
          price.amount
        }`}</p>
        {this.props.data.data.attributes.map((attribute, index) => {
          const attributeData = this.props.data.attributeData[index];
          if (attribute.type === 'swatch') {
            return (
              <AttributeContainer key={String(index)}>
                <AttributeTitle>{attribute.name}:</AttributeTitle>
                <ChipGroup
                  mini
                  swatchGroup
                  data={attribute.items}
                  selectedIndex={attributeData.selectedIndex}
                  onSelectChip={(idx) => {
                    this.props.onChipSelected(attribute.name, idx);
                  }}
                />
              </AttributeContainer>
            );
          }
          return (
            <AttributeContainer key={String(index)}>
              <AttributeTitle>{attribute.name}:</AttributeTitle>
              <ChipGroup
                mini
                data={attribute.items}
                selectedIndex={attributeData.selectedIndex}
                onSelectChip={(idx) => {
                  this.props.onChipSelected(attribute.name, idx);
                }}
              />
            </AttributeContainer>
          );
        })}
      </Wrapper>
    );
  }
}
