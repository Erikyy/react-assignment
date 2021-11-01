import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { NavItem } from './Navbar';

class NavbarLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  updateItem() {
    const location = this.props.location.pathname;
    this.setState({
      isActive: location === this.props.path,
    });
  }

  render() {
    return (
      <NavItem
        style={{
          borderBottom: this.state.isActive ? 'solid 2px black' : '',
        }}
      >
        <NavLink to={this.props.path}>{this.props.children}</NavLink>
      </NavItem>
    );
  }
}

export default withRouter(NavbarLink);
