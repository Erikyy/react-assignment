import React from 'react';
import './styles/Chip.css';

export default class Chip extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: this.props.background,
        }}
        className={`chip ${this.props.selected ? 'chip-selected' : ''} ${
          this.props.swatch ? 'chip-swatch' : ''
        } ${this.props.mini ? 'chip-mini' : ''} `}
        onClick={() => this.props.onClick()}
        role="none"
      >
        <span id="">{this.props.label}</span>
      </div>
    );
  }
}
