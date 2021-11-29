import React from 'react';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from '../../../icons/Icons';
import './styles/CartPageItemImageContainer.css';

const Wrapper = styled.div`
  width: 300px;
  padding: 5px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  overflow: hidden;
`;

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
      <Wrapper>
        <div className="image-gallery-button-container">
          <button
            className="image-gallery-button"
            type="button"
            onClick={() => this.decremntGalleryIndex()}
          >
            <ChevronLeft />
          </button>
          <button
            className="image-gallery-button"
            type="button"
            onClick={() => this.incrementGalleryIndex()}
          >
            <ChevronRight />
          </button>
        </div>
        <Image src={this.props.data[this.state.galleryIndex]} alt="img" />
      </Wrapper>
    );
  }
}
