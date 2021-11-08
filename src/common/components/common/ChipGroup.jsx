import React from 'react';
import Chip from './Chip';
import './styles/ChipGroup.css';

/**
 * props:
 * type - swatch/normal
 * data
 */
export default class ChipGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItemIndex: 0,
    };
  }

  renderChip(index, item) {
    if (index === this.state.selectedItemIndex) {
      return (
        <Chip
          onClick={() => {
            this.setState({
              selectedItemIndex: index,
            });
          }}
          selected
          label={item.value}
          key={String(index)}
        />
      );
    }
    return (
      <Chip
        label={item.value}
        onClick={() => {
          this.setState({
            selectedItemIndex: index,
          });
        }}
        key={String(index)}
      />
    );
  }

  renderSwatch(index, item) {
    if (index === this.state.selectedItemIndex) {
      return (
        <Chip
          onClick={() =>
            this.setState({
              selectedItemIndex: index,
            })
          }
          selected
          swatch
          background={item.value}
          key={String(index)}
        />
      );
    }
    return (
      <Chip
        onClick={() =>
          this.setState({
            selectedItemIndex: index,
          })
        }
        swatch
        background={item.value}
        key={String(index)}
      />
    );
  }

  render() {
    return (
      <div className="chipgroup">
        {this.props.data.map((item, index) => {
          if (this.props.swatchGroup) {
            return this.renderSwatch(index, item);
          }
          return this.renderChip(index, item, '');
        })}
      </div>
    );
  }
}
