import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { NavItem } from './Navbar';

class NavbarLink extends React.Component {
  render() {
    const isActive = this.props.location.pathname.includes(this.props.path);
    return (
      <NavItem
        style={{
          borderBottom: isActive ? 'solid 2px var(--color-green)' : '',
          padding: '1.5rem',
        }}
      >
        <NavLink
          style={{
            color: 'black',
            textDecoration: 'none',
            textTransform: 'uppercase',
          }}
          className={isActive ? 'nav-link-active' : 'nav-link'}
          activeStyle={{ color: 'var(--color-green)' }}
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
