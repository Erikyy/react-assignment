import React from 'react';
import { connect } from 'react-redux';
import { compose } from '@reduxjs/toolkit';
import { withRouter } from 'react-router-dom';
import getSymbolFromCurrency from 'currency-symbol-map';

import { NavItem } from '../../../common/components/navigation/Navbar';
import { ButtonOutline, ButtonPrimary, IconButton } from '../../../common/components/common/Button';
import { CartIcon } from '../../../icons/Icons';
import Badge from '../../../common/components/common/Badge';
import DropDownMenu from '../../../common/components/navigation/DropDownMenu';
import DropDownItem from '../../../common/components/navigation/DropDownItem';

import CartMenuItemDescription from '../../../common/components/cart/CartMenuItemDescription';
import CartMenuAmountSelection from '../../../common/components/cart/CartMenuAmountSelection';
import CartMenuItemImage from '../../../common/components/cart/CartMenuItemImage';

import { addItemToCart, removeItemFromCart, setNewAttributeSelectedIndex } from '../CartSlice';

import './styles/CartMenu.css';

const mapStateToProps = (state) => {
  return {
    totalItemQuantity: state.CartReducer.totalItemQuantity,
    products: state.CartReducer.products,
    activeCurrency: state.CurrencyReducer.activeCurrency,
  };
};

const mapDispatchToProps = {
  addItemToCart,
  removeItemFromCart,
  setNewAttributeSelectedIndex,
};

class CartMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.dropdownRef = React.createRef();
  }

  componentDidMount() {
    this.props.setCartCloseFunc(this.closeMenu);
  }

  setOpenOrClosed() {
    this.setState(
      (prevState) => ({ open: !prevState.open }),
      () => {
        console.log(`Menu open: ${this.state.open}`);
        this.props.onCartButtonClicked(this.state.open);
      },
    );
  }

  redirectToCartPage() {
    this.props.history.push('/cart');
  }

  incrementTotalPrice(tempTotalPrice, item) {
    let totalPrice = tempTotalPrice;
    for (let i = 0; i < item.quantity; i += 1) {
      const price = item.product.data.prices.find(
        (el) => el.currency === this.props.activeCurrency,
      );
      totalPrice += price.amount;
    }
    return totalPrice;
  }

  closeMenu() {
    this.setState({ open: false });
  }

  render() {
    let tempTotalPrice = 0;
    let badge;
    if (this.props.totalItemQuantity > 0) {
      badge = <Badge count={this.props.totalItemQuantity} />;
    }
    return (
      <NavItem
        onBlur={(e) => {
          if (!this.dropdownRef.current.contains(e.relatedTarget) && this.state.open) {
            this.setOpenOrClosed();
          }
        }}
        ref={this.dropdownRef}
        padding={0.1}
      >
        <IconButton
          style={{
            padding: '12px',
            scale: '1.3',
          }}
          onClick={() => {
            this.setOpenOrClosed();
          }}
        >
          {badge}
          <CartIcon />
        </IconButton>

        <DropDownMenu className="cart-dropdown" open={this.state.open}>
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
          <div className="cart-menu-scrollable-menu">
            {this.props.products.map((item, index) => {
              tempTotalPrice = this.incrementTotalPrice(tempTotalPrice, item);
              return (
                <DropDownItem
                  key={String(index)}
                  style={{
                    padding: '15px',
                    paddingBottom: '25px',
                  }}
                >
                  <div className="cart-item">
                    <CartMenuItemDescription
                      data={item.product}
                      activeCurrency={this.props.activeCurrency}
                      onChipSelected={(name, idx) => {
                        this.props.setNewAttributeSelectedIndex({ name, idx, id: item.id });
                      }}
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
                    <CartMenuItemImage imageSrc={item.product.data.gallery[0]} />
                  </div>
                </DropDownItem>
              );
            })}
          </div>
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
                this.setState({ open: false }, () => {
                  this.props.onCartButtonClicked(this.state.open);
                  this.redirectToCartPage();
                });
              }}
            >
              VIEW BAG
            </ButtonOutline>
            <ButtonPrimary className="button-primary">CHECKOUT</ButtonPrimary>
          </DropDownItem>
        </DropDownMenu>
      </NavItem>
    );
  }
}
const enhance = compose(withRouter, connect(mapStateToProps, mapDispatchToProps));
export default enhance(CartMenu);
