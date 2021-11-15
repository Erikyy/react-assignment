import React from 'react';
import { connect } from 'react-redux';
import ProductCard from '../../common/components/product/ProductCard';
import './styles/ProductPage.css';

const mapStateToProps = (state) => {
  return {
    products: state.ProductsReducer.products,
    activeCurrency: state.CurrencyReducer.activeCurrency,
    activeCategory: state.CategoriesReducer.activeCategory,
  };
};

class ProductsComponent extends React.Component {
  render() {
    return (
      <div className="page-container">
        <div className="category-name">
          <h1>{this.props.activeCategory}</h1>
        </div>
        <div className="product-container">
          {this.props.products.map((product, index) => {
            return (
              <ProductCard
                data={product}
                activeCategory={this.props.activeCategory}
                activeCurrency={this.props.activeCurrency}
                key={String(index)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps)(ProductsComponent);
