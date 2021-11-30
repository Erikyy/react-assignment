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
          ref={this.dropdownRef}
          onBlur={this.props.onBlur}
          onFocus={this.props.onFocus}
        >
          <div className="dropdown-menu" ref={this.dropdownRef}>
            {this.props.children}
          </div>
        </div>
      </CSSTransition>
    );
  }
}
