import React from 'react';
import './styles/ImageSlider.css';

export default class ProductImageSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImageIndex: 0,
    };
  }

  render() {
    return (
      <div className="slider-image-container">
        <ul className="slider-images-list">
          {this.props.data.map((item, index) => {
            return (
              <li
                onClick={() => {
                  this.setState({
                    selectedImageIndex: index,
                  });
                }}
                role="none"
                className="slider-thumbnail-container"
                key={String(index)}
              >
                <img
                  className={`slider-thumbnail ${
                    this.state.selectedImageIndex === index ? 'slider-thumbnail-active' : ''
                  }`}
                  src={item}
                  alt="thumbnail"
                />
              </li>
            );
          })}
        </ul>
        <div className="slider-main-img-container">
          <img
            className="slider-main-img"
            src={this.props.data[this.state.selectedImageIndex]}
            alt="mainimg"
          />
        </div>
      </div>
    );
  }
}
