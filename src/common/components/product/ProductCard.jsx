import getSymbolFromCurrency from 'currency-symbol-map';
import React from 'react';
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
          <div className="card-img-container">
            <img className="card-img" src={this.props.data.gallery[0]} alt="img" />
          </div>
          <p className="product-name">{`${this.props.data.brand} ${this.props.data.name}`}</p>
          <p className="product-price">{`${getSymbolFromCurrency(price.currency)}${
            price.amount
          }`}</p>
        </div>
      </a>
    );
  }
}
