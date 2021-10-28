import React from 'react';
import './styles/Navbar.css';

export default class Navbar extends React.Component {
  render() {
    return <nav className="navbar"> {this.props.children} </nav>;
  }
}
