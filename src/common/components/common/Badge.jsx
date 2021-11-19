import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
  width: 22px;
  height: 22px;
  position: absolute;
  margin-top: -10px;
  margin-left: 10px;
  background-color: #000;
  color: #fff;
  border-radius: 15px;
  font-weight: bold;
  font-size: medium;
  display: block;
`;
export default class Badge extends React.Component {
  render() {
    return <Wrapper>{this.props.count}</Wrapper>;
  }
}
