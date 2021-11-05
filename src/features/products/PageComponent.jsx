import React from 'react';
import { connect } from 'react-redux';
import ProductCard from './ProductCard';
import './styles/ProductPage.css';

const mapStateToProps = (state) => {
  return {
    products: state.ProductsReducer.products,
    activeCurrency: state.CurrencyReducer.activeCurrency,
  };
};

class PageComponent extends React.Component {
  render() {
    return (
      <div className="product-container">
        {this.props.products.map((product, index) => {
          console.log(product);
          return (
            <ProductCard
              data={product}
              activeCurrency={this.props.activeCurrency}
              key={String(index)}
            />
          );
        })}
      </div>
    );
  }
}
export default connect(mapStateToProps)(PageComponent);
