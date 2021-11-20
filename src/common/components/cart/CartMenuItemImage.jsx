import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100px;
  min-width: 100px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  overflow: hidden;
`;

export default class CartMenuItemImage extends React.Component {
  render() {
    return (
      <Wrapper>
        <Image src={this.props.imageSrc} alt="img" />
      </Wrapper>
    );
  }
}
