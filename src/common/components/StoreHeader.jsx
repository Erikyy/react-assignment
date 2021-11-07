import React from 'react';
import './StoreHeader.css';
import Categories from '../../features/categories/Categories';
import { Navbar, NavLogo, NavList, NavItem } from './navigation/Navbar';
import { IconButton } from './common/Button';
import CartIcon from '../../icons/Icons';
import CurrencySwitcher from '../../features/currency-switcher/CurrencySwitcher';

export default class StoreHeader extends React.Component {
  render() {
    return (
      <Navbar>
        <Categories />
        <NavLogo src="/a-logo.png" size={40} />
        <NavList
          right
          style={{
            paddingRight: '3rem',
          }}
        >
          <CurrencySwitcher />
          <NavItem padding={0.1}>
            <IconButton
              style={{
                padding: '12px',
              }}
            >
              <CartIcon />
            </IconButton>
          </NavItem>
        </NavList>
      </Navbar>
    );
  }
}
