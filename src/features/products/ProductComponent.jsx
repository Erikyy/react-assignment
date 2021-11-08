import React from 'react';
import { connect } from 'react-redux';
import DOMPurify from 'dompurify';
import getSymbolFromCurrency from 'currency-symbol-map';
import { fetchProductById } from './ProductSlice';
import './styles/ProductDetailPage.css';
import {
  AttributeContainer,
  AttributeInput,
  AttributeItem,
  AttributeList,
  AttributeSwatch,
  AttributeTitle,
} from '../../common/components/common/ProductAttribute';
import { ButtonPrimary } from '../../common/components/common/Button';
import Chip from '../../common/components/common/Chip';
import ChipGroup from '../../common/components/common/ChipGroup';

const purify = DOMPurify.sanitize;

const mapStateToProps = (state) => {
  return {
    activeCurrency: state.CurrencyReducer.activeCurrency,
    product: state.ProductReducer.product,
    status: state.ProductReducer.status,
  };
};
const mapDispatchToProps = {
  fetchProductById,
};

class ProductComponent extends React.Component {
  componentDidMount() {
    // fetch product by id
    this.props.fetchProductById(this.props.match.params.id);
  }

  getProductPrice() {
    if (this.props.product.prices) {
      return this.props.product.prices.find((el) => {
        return el.currency === this.props.activeCurrency;
      });
    }
    return 0;
  }

  render() {
    console.log(this.props.status);
    if (this.props.status === 'success') {
      console.log(this.props.product.attributes[0]);
      return (
        <div className="product-page-container">
          <div className="product-page-image-container">
            <img className="product-page-main-img" src={this.props.product.gallery[0]} alt="img" />
          </div>
          <div className="product-description-container">
            <h1>{this.props.product.brand}</h1>
            <h2
              style={{
                fontWeight: 100,
                color: '#1D1F22',
              }}
            >
              {this.props.product.name}
            </h2>
            {this.props.product.attributes.map((attribute, index) => {
              console.log(attribute);
              if (attribute.type === 'swatch') {
                return (
                  <AttributeContainer key={String(index)}>
                    <AttributeTitle>{attribute.name}:</AttributeTitle>
                    <ChipGroup swatchGroup data={attribute.items} />
                  </AttributeContainer>
                );
              }
              return (
                <AttributeContainer key={String(index)}>
                  <AttributeTitle>{attribute.name}:</AttributeTitle>
                  <ChipGroup data={attribute.items} />
                </AttributeContainer>
              );
            })}
            <p className="">{`${getSymbolFromCurrency(this.getProductPrice().currency)}${
              this.getProductPrice().amount
            }`}</p>
            <ButtonPrimary
              style={{
                width: '100%',
              }}
            >
              ADD TO CART
            </ButtonPrimary>
            {/* disabled eslint for line below due to using sanitizer to sanitize html from api */}
            {/* eslint-disable-next-line react/no-danger */}
            <div dangerouslySetInnerHTML={{ __html: purify(this.props.product.description) }} />
          </div>
        </div>
      );
    }
    return 0;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductComponent);
