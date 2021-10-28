import React from 'react';

export default class DropDownMenu extends React.Component {
  render() {
    return <div className="dropdown"> {this.props.children} </div>;
  }
}
