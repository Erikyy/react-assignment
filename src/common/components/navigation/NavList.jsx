import React from 'react';

export default class NavList extends React.Component {
  render() {
    return <ul className={`nav-list ${this.props.className}`}>{this.props.children}</ul>;
  }
}
