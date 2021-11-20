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
      <div className="slider-image-container">
        <ul className="image-slider">
          {this.props.data.map((item, index) => {
            return (
              <li
                onClick={() => {
                  this.setState({
                    selectedImageIndex: index,
                  });
                }}
                role="none"
                className="thumbnail-container"
                key={String(index)}
              >
                <img className="thumbnail" src={item} alt="thumbnail" />
              </li>
            );
          })}
        </ul>
        <div className="main-img-container">
          <img
            className="main-img"
            src={this.props.data[this.state.selectedImageIndex]}
            alt="mainimg"
          />
        </div>
      </div>
    );
  }
}
