import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 300px;
  padding: 5px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  overflow: hidden;
`;

export default class CartPageItemImageContainer extends React.Component {
  render() {
    return (
      <Wrapper>
        <Image src={this.props.data[0]} alt="img" />
      </Wrapper>
    );
  }
}
