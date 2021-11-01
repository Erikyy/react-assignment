import React from 'react';
import './StoreHeader.css';
import Categories from '../../features/categories/Categories';
import { Navbar, NavLogo, NavList, NavItem } from './navigation/Navbar';

export default class StoreHeader extends React.Component {
  render() {
    return (
      <Navbar>
        <Categories />
        <NavLogo src="/a-logo.png" size={40} />
        <NavList right>
          <NavItem> currency </NavItem>
          <NavItem> cart </NavItem>
        </NavList>
      </Navbar>
    );
  }
}
