import React from 'react';
import './styles/ProductImages.css';

export default class ProductImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImageIndex: 0,
    };
  }

  render() {
    return (
      <div className="product-page-image-container">
        <ul className="product-image-slider">
          {this.props.data.map((item, index) => {
            return (
              <li
                onClick={() => {
                  this.setState({
                    selectedImageIndex: index,
                  });
                }}
                role="none"
                className="product-image-slider-thumbnail-container"
                key={String(index)}
              >
                <img className="product-image-slider-thumbnail" src={item} alt="thumbnail" />
              </li>
            );
          })}
        </ul>
        <div className="product-main-img-container">
          <img
            className="product-page-main-img"
            src={this.props.data[this.state.selectedImageIndex]}
            alt="mainimg"
          />
        </div>
      </div>
    );
  }
}
