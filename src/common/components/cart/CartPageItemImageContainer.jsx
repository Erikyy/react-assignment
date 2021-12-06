import React from 'react';
import { ChevronLeft, ChevronRight } from '../../../icons/Icons';
import './styles/CartPageItemImageContainer.css';

export default class CartPageItemImageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryIndex: 0,
    };
  }

  decremntGalleryIndex() {
    let index = this.state.galleryIndex;
    index -= 1;
    if (index === -1) {
      index = this.props.data.length - 1;
    }
    this.setState(() => ({ galleryIndex: index }));
  }

  incrementGalleryIndex() {
    let index = this.state.galleryIndex;
    index += 1;
    if (index === this.props.data.length) {
      index = 0;
    }
    this.setState(() => ({ galleryIndex: index }));
  }

  render() {
    return (
      <div className="item-image-container">
        {this.props.data.length > 1 ? (
          <div className="item-image-button-container">
            <button
              className="item-image-button"
              type="button"
              onClick={() => this.decremntGalleryIndex()}
            >
              <ChevronLeft />
            </button>
            <button
              className="item-image-button"
              type="button"
              onClick={() => this.incrementGalleryIndex()}
            >
              <ChevronRight />
            </button>
          </div>
        ) : null}
        <img className="item-image" src={this.props.data[this.state.galleryIndex]} alt="img" />
      </div>
    );
  }
}
