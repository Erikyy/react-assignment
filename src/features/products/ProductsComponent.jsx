import React from 'react';
import { connect } from 'react-redux';
import ProductCard from '../../common/components/product/ProductCard';
import './styles/ProductPage.css';
import { addItemToCart } from '../cart/CartSlice';

const mapStateToProps = (state) => {
  return {
    products: state.ProductsReducer.products,
    activeCurrency: state.CurrencyReducer.activeCurrency,
    activeCategory: state.CategoriesReducer.activeCategory,
  };
};

const mapDispatchToProps = {
  addItemToCart,
};
class ProductsComponent extends React.Component {
  mapAttributeDataForProduct = (attributes) => {
    const attributeData = [];
    attributes.map((item) => {
      attributeData.push({
        name: item.name,
        selectedIndex: 0,
      });
      return item;
    });
    return attributeData;
  };

  render() {
    return (
      <div className="page-container">
        <div className="category-name">
          <h1 className="page-category-title">{this.props.activeCategory}</h1>
        </div>
        <div className="products-container">
          {this.props.products.map((item, index) => {
            return (
              <ProductCard
                addToCartClick={() => {
                  this.props.addItemToCart({
                    product: {
                      data: item,
                      attributeData: this.mapAttributeDataForProduct(item.attributes),
                    },
                  });
                }}
                data={item}
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
export default connect(mapStateToProps, mapDispatchToProps)(ProductsComponent);
