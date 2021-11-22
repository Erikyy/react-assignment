import getSymbolFromCurrency from 'currency-symbol-map';
import React from 'react';
import styled from 'styled-components';
import ChipGroup from '../common/ChipGroup';
import { AttributeContainer, AttributeTitle } from '../product/ProductAttribute';

const Wrapper = styled.div`
  float: left;
`;

export default class CartPageItemDescriptionContainer extends React.Component {
  render() {
    const price = this.props.data.data.prices.find(
      (el) => el.currency === this.props.activeCurrency,
    );
    return (
      <Wrapper>
        <h2
          style={{
            fontSize: '30pt',
          }}
        >
          {this.props.data.data.brand}
        </h2>
        <h2
          style={{
            paddingTop: '5px',
            fontWeight: 'normal',
            fontSize: '30pt',
          }}
        >
          {this.props.data.data.name}
        </h2>
        <h3
          style={{
            fontWeight: 'bold',
            fontSize: '24pt',
            paddingTop: '1rem',
            paddingBottom: '1rem',
          }}
        >{`${getSymbolFromCurrency(price.currency)}${price.amount}`}</h3>
        {this.props.data.data.attributes.map((attribute, index) => {
          const attributeData = this.props.data.attributeData[index];
          if (attribute.type === 'swatch') {
            return (
              <AttributeContainer key={String(index)}>
                <AttributeTitle>{attribute.name}:</AttributeTitle>
                <ChipGroup
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
