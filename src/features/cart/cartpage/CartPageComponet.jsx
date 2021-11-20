import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CartPageItemDescriptionContainer from '../../../common/components/cart/CartPageItemDescriptionContainer';
import CartPageItemImageContainer from '../../../common/components/cart/CartPageItemImageContainer';
import CartMenuAmountSelection from '../../../common/components/cart/CartMenuAmountSelection';
import { addItemToCart, removeItemFromCart } from '../CartSlice';

const Container = styled.div`
  padding: 4rem;
  padding-left: 6rem;
  padding-right: 16rem;
  padding-top: 8rem;
  @media (max-width: 900px) {
    padding-right: 4rem;
    padding-left: 4rem;
  }
`;

const Title = styled.h1`
  font-weight: bolder;
`;

const CartList = styled.ul`
  list-style: none;
  padding-top: 5rem;
`;

const CartItem = styled.li`
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const mapStateToProps = (state) => {
  return {
    products: state.CartReducer.products,
    totalItemQuantity: state.CartReducer.totalItemQuantity,
  };
};

const mapDispatchToProps = {
  addItemToCart,
  removeItemFromCart,
};

class CartPage extends React.Component {
  render() {
    return (
      <Container>
        <div className="title-container">
          <Title>CART</Title>
        </div>
        <CartList>
          {this.props.products.map((item, index) => {
            return (
              <CartItem key={String(index)}>
                <CartPageItemDescriptionContainer data={item.product} />
                <CartMenuAmountSelection
                  large
                  style={{ marginLeft: 'auto' }}
                  data={item.quantity}
                  onAddClick={() => {
                    this.props.addItemToCart({ product: item.product });
                  }}
                  onRemoveClick={() => {
                    this.props.removeItemFromCart({ product: item.product });
                  }}
                />
                <CartPageItemImageContainer data={item.product.gallery} />
              </CartItem>
            );
          })}
        </CartList>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
