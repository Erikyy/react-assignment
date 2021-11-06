import React from 'react';
import { connect } from 'react-redux';
import DOMPurify from 'dompurify';
import { fetchProductById } from '../../common/api/StoreApi';
import { setActiveCategory } from '../categories/CategoriesSlice';

const purify = DOMPurify.sanitize;

const mapStateToProps = (state) => {
  return {
    activeCurrency: state.CurrencyReducer.activeCurrency,
  };
};
const mapDispatchToProps = {
  setActiveCategory,
};

class ProductComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    // fetch product by id
    fetchProductById(this.props.match.params.id).then((data) => {
      this.setState({
        product: data.data.product,
      });
    });
  }

  render() {
    console.log(this.state.product);

    return (
      <div>
        <p>{this.state.product.name}</p>
        <p>{this.state.product.brand}</p>
        {/* disabled eslint for line below due to using sanitizer to sanitize html from api */}
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: purify(this.state.product.description) }} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductComponent);
