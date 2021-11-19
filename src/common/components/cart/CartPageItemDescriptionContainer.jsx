import getSymbolFromCurrency from 'currency-symbol-map';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ChipGroup from '../common/ChipGroup';

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
        <h2>{this.props.data.brand}</h2>
        <h2>{this.props.data.name}</h2>
        <p>{`${getSymbolFromCurrency(price.currency)}${price.amount}`}</p>
        {this.props.data.attributes.map((attribute, index) => {
          if (attribute.type === 'swatch') {
            return <ChipGroup swatchGroup data={attribute.items} />;
          }
          return <ChipGroup data={attribute.items} />;
        })}
      </Wrapper>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPageItemDescriptionContainer);
