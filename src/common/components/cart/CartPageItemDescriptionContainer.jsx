import getSymbolFromCurrency from 'currency-symbol-map';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ChipGroup from '../common/ChipGroup';
import { AttributeContainer, AttributeTitle } from '../product/ProductAttribute';

const Wrapper = styled.div`
  float: left;
`;

const mapStateToProps = (state) => {
  return {
    activeCurrency: state.CurrencyReducer.activeCurrency,
  };
};

const mapDispatchToProps = {};

class CartPageItemDescriptionContainer extends React.Component {
  render() {
    const price = this.props.data.prices.find((el) => el.currency === this.props.activeCurrency);
    return (
      <Wrapper>
        <h2 style={{}}>{this.props.data.brand}</h2>
        <h2 style={{}}>{this.props.data.name}</h2>
        <h3
          style={{
            fontWeight: 'bold',
            fontSize: '18pt',
            paddingTop: '1rem',
            paddingBottom: '1rem',
          }}
        >{`${getSymbolFromCurrency(price.currency)}${price.amount}`}</h3>
        {this.props.data.attributes.map((attribute, index) => {
          if (attribute.type === 'swatch') {
            return (
              <AttributeContainer>
                <AttributeTitle>{attribute.name}:</AttributeTitle>
                <ChipGroup swatchGroup data={attribute.items} key={String(index)} />
              </AttributeContainer>
            );
          }
          return (
            <AttributeContainer>
              <AttributeTitle>{attribute.name}:</AttributeTitle>
              <ChipGroup data={attribute.items} key={String(index)} />
            </AttributeContainer>
          );
        })}
      </Wrapper>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPageItemDescriptionContainer);
