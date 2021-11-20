import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import getSymbolFromCurrency from 'currency-symbol-map';

import { NavItem } from '../../../common/components/navigation/Navbar';
import { ButtonOutline, ButtonPrimary, IconButton } from '../../../common/components/common/Button';
import { CartIcon } from '../../../icons/Icons';
import Badge from '../../../common/components/common/Badge';
import DropDownMenu from '../../../common/components/navigation/DropDownMenu';
import DropDownItem from '../../../common/components/navigation/DropDownItem';

import './styles/CartMenu.css';
import CartMenuItemDescription from '../../../common/components/cart/CartMenuItemDescription';
import CartMenuAmountSelection from '../../../common/components/cart/CartMenuAmountSelection';
import CartMenuItemImage from '../../../common/components/cart/CartMenuItemImage';
import {
  addItemToCart,
  removeItemFromCart,
  addTotalAmount,
  subtractTotalAmount,
  setCartMenuOpen,
} from '../CartSlice';

const mapStateToProps = (state) => {
  return {
    totalItemQuantity: state.CartReducer.totalItemQuantity,
    products: state.CartReducer.products,
    totalAmount: state.CartReducer.totalAmount,
    cartMenuOpen: state.CartReducer.cartMenuOpen,
    activeCurrency: state.CurrencyReducer.activeCurrency,
  };
};

const mapDispatchToProps = {
  addItemToCart,
  removeItemFromCart,
  addTotalAmount,
  subtractTotalAmount,
  setCartMenuOpen,
};

class CartMenu extends React.Component {
  redirectToCartPage() {
    this.props.history.push('cart');
  }

  incrementTotalPrice(tempTotalPrice, item) {
    let totalPrice = tempTotalPrice;
    for (let i = 0; i < item.quantity; i += 1) {
      console.log(i);

      const price = item.product.prices.find((el) => el.currency === this.props.activeCurrency);
      console.log(` Price: ${price.amount}`);
      totalPrice += price.amount;
    }
    return totalPrice;
  }

  render() {
    let tempTotalPrice = 0;
    let badge;
    if (this.props.totalItemQuantity > 0) {
      badge = <Badge count={this.props.totalItemQuantity} />;
    }
    return (
      <NavItem padding={0.2}>
        <IconButton
          style={{
            padding: '12px',
          }}
          onClick={() => {
            this.props.setCartMenuOpen(!this.props.cartMenuOpen);
          }}
        >
          {badge}
          <CartIcon />
        </IconButton>

        <DropDownMenu
          style={{
            top: '2.5rem',
            right: '7rem',
            backgroundColor: '#fff',
          }}
          open={this.props.cartMenuOpen}
        >
          <DropDownItem
            style={{
              paddingBottom: '30px',
            }}
          >
            <p
              style={{
                fontWeight: 'bold',
              }}
            >
              My Bag, {this.props.totalItemQuantity} items
            </p>
          </DropDownItem>
          {this.props.products.map((item, index) => {
            console.log(item);
            tempTotalPrice = this.incrementTotalPrice(tempTotalPrice, item);
            return (
              <DropDownItem key={String(index)}>
                <div className="cart-item">
                  <CartMenuItemDescription
                    data={item.product}
                    activeCurrency={this.props.activeCurrency}
                  />
                  <CartMenuAmountSelection
                    data={item.quantity}
                    onAddClick={() => {
                      this.props.addItemToCart({ product: item.product });
                    }}
                    onRemoveClick={() => {
                      this.props.removeItemFromCart({ product: item.product });
                    }}
                  />
                  <CartMenuItemImage imageSrc={item.product.gallery[0]} />
                </div>
              </DropDownItem>
            );
          })}
          <DropDownItem>
            <div className="cart-menu-total-amount-container">
              <p className="cart-menu-total-title">Total</p>
              <p className="cart-menu-total-amount">
                {`${getSymbolFromCurrency(this.props.activeCurrency)}${
                  Math.round((tempTotalPrice + Number.EPSILON) * 100) / 100
                }`}
              </p>
            </div>
          </DropDownItem>
          <DropDownItem className="cart-menu-button-container">
            <ButtonOutline
              className="button-outline"
              onClick={() => {
                this.redirectToCartPage();
              }}
            >
              VIEW BAG
            </ButtonOutline>
            <ButtonPrimary className="button-primary">CHECK OUT</ButtonPrimary>
          </DropDownItem>
        </DropDownMenu>
      </NavItem>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CartMenu));
