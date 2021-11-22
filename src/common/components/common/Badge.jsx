import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
  width: 15px;
  height: 15px;
  position: absolute;
  margin-top: -10px;
  margin-left: 12px;
  background-color: #000;
  color: #fff;
  border-radius: 15px;
  font-weight: bold;
  font-size: medium;
  display: block;
  padding: 2px 2px 3px;
  font-size: 10pt;
  font-family: 'Roboto';
`;
export default class Badge extends React.Component {
  render() {
    return <Wrapper>{this.props.count}</Wrapper>;
  }
}
