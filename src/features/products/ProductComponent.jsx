import React from 'react';
import { connect } from 'react-redux';
import DOMPurify from 'dompurify';
import getSymbolFromCurrency from 'currency-symbol-map';
import { fetchProductById } from './ProductSlice';
import './styles/ProductDetailPage.css';
import {
  AttributeContainer,
  AttributeTitle,
} from '../../common/components/product/ProductAttribute';
import { ButtonPrimary } from '../../common/components/common/Button';
import ChipGroup from '../../common/components/common/ChipGroup';
import ProductImages from '../../common/components/product/ProductImages';
import { addItemToCart } from '../cart/CartSlice';

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
  addItemToCart,
};

class ProductComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAttributes: [],
    };
  }

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

  setSelectedChip(attrName, attrindex) {
    if (this.state.selectedAttributes.find((el) => el.name === attrName)) {
      const newSelectedAttributes = this.state.selectedAttributes.map((el) =>
        el.name === attrName
          ? {
              ...el,
              selectedIndex: attrindex,
            }
          : el,
      );
      this.setState(() => ({ selectedAttributes: newSelectedAttributes }));
    } else {
      this.setState((prevState) => ({
        selectedAttributes: [
          ...prevState.selectedAttributes,
          {
            name: attrName,
            selectedIndex: attrindex,
          },
        ],
      }));
    }
  }

  render() {
    if (this.props.status === 'success') {
      return (
        <div className="product-page-container">
          <ProductImages data={this.props.product.gallery} />
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
              if (attribute.type === 'swatch') {
                return (
                  <AttributeContainer key={String(index)}>
                    <AttributeTitle>{attribute.name}:</AttributeTitle>
                    <ChipGroup
                      defaultSelectChip={(idx) => {
                        this.setSelectedChip(attribute.name, idx);
                      }}
                      swatchGroup
                      data={attribute.items}
                      onSelectChip={(idx) => {
                        this.setSelectedChip(attribute.name, idx);
                      }}
                    />
                  </AttributeContainer>
                );
              }
              return (
                <AttributeContainer key={String(index)}>
                  <AttributeTitle>{attribute.name}:</AttributeTitle>
                  <ChipGroup
                    defaultSelectChip={(idx) => {
                      this.setSelectedChip(attribute.name, idx);
                    }}
                    data={attribute.items}
                    onSelectChip={(idx) => {
                      this.setSelectedChip(attribute.name, idx);
                    }}
                  />
                </AttributeContainer>
              );
            })}
            <p className="product-price-title">PRICE:</p>
            <p className="product-price">{`${getSymbolFromCurrency(
              this.getProductPrice().currency,
            )}${this.getProductPrice().amount}`}</p>
            <ButtonPrimary
              style={{
                width: '100%',
              }}
              onClick={() => {
                if (this.props.product.inStock) {
                  this.props.addItemToCart({
                    product: {
                      data: this.props.product,
                      attributeData: this.state.selectedAttributes,
                    },
                  });
                }
              }}
            >
              {`${this.props.product.inStock ? 'ADD TO CART' : 'OUT OF STOCK'}`}
            </ButtonPrimary>
            {/* disabled eslint for line below due to using sanitizer to sanitize html from api */}
            <div
              className="product-description"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: purify(this.props.product.description) }}
            />
          </div>
        </div>
      );
    }
    return 0;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductComponent);
