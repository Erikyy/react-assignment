import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { NavItem } from './Navbar';

class NavbarLink extends React.Component {
  render() {
    const isActive = this.props.location.pathname.includes(this.props.path);
    return (
      <NavItem
        className="nav-item-padding-one-half"
        style={{
          borderBottom: isActive ? 'solid 2px var(--color-green)' : '',
        }}
      >
        <NavLink
          className={`${isActive ? 'nav-link-active' : null} nav-link`}
          to={this.props.path}
          onClick={() => this.props.onItemClicked()}
        >
          {this.props.children}
        </NavLink>
      </NavItem>
    );
  }
}

export default withRouter(NavbarLink);
