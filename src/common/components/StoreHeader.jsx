import React from 'react';
import './StoreHeader.css';
import Categories from '../../features/categories/Categories';
import Navbar from './navigation/Navbar';
import NavItem from './navigation/NavItem';
import NavList from './navigation/NavList';
import NavLogo from './navigation/NavLogo';

export default class StoreHeader extends React.Component {
  render() {
    return (
      <Navbar>
        <Categories />
        <NavLogo />
        <NavList className="right">
          <NavItem> hello </NavItem>
          <NavItem> hello 2 </NavItem>
        </NavList>
      </Navbar>
    );
  }
}
