import getSymbolFromCurrency from 'currency-symbol-map';
import React from 'react';
import { CartIcon } from '../../../icons/Icons';
import './ProductCard.css';

export default class ProductCard extends React.Component {
  render() {
    const price = this.props.data.prices.find((element) => {
      return element.currency === this.props.activeCurrency;
    });
    return (
      <a
        style={{
          textDecoration: 'none',
          color: 'black',
        }}
        href={`/product/${this.props.activeCategory}/${this.props.data.id}`}
      >
        <div className="card">
          {this.props.data.inStock ? (
            <div className="card-main">
              <div className="card-img-container">
                <img className="card-img" src={this.props.data.gallery[0]} alt="img" />
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  this.props.addToCartClick();
                }}
                type="button"
                className="card-add-to-cart"
              >
                <CartIcon
                  style={{
                    fill: '#fff',
                  }}
                />
              </button>
              <p className="product-name">{`${this.props.data.brand} ${this.props.data.name}`}</p>
              <p className="product-price">{`${getSymbolFromCurrency(price.currency)}${
                price.amount
              }`}</p>
            </div>
          ) : (
            <div className="card-main">
              <div className="card-overlay">
                <h2
                  style={{
                    color: 'var(--color-light-gray)',
                  }}
                >
                  OUT OF STOCK
                </h2>
              </div>
              <div className="card-img-container">
                <img className="card-img" src={this.props.data.gallery[0]} alt="img" />
              </div>
              <p className="product-name">{`${this.props.data.brand} ${this.props.data.name}`}</p>
              <p className="product-price">{`${getSymbolFromCurrency(price.currency)}${
                price.amount
              }`}</p>
            </div>
          )}
        </div>
      </a>
    );
  }
}
