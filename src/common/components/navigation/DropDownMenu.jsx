import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './styles/DropDownMenu.css';

export default class DropDownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.dropdownRef = React.createRef();
  }

  render() {
    return (
      <CSSTransition
        nodeRef={this.dropdownRef}
        in={this.props.open}
        timeout={300}
        classNames="dropdown"
        unmountOnExit
      >
        <div
          className={`dropdown ${this.props.className}`}
          style={this.props.style}
          ref={this.dropdownRef}
        >
          <div className="menu" ref={this.dropdownRef}>
            {this.props.children}
          </div>
        </div>
      </CSSTransition>
    );
  }
}
