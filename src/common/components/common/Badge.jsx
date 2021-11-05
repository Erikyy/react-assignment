import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
  width: 24px;
  height: 24px;
`;
export default class Badge extends React.Component {
  render() {
    return <Wrapper>{this.props.count}</Wrapper>;
  }
}
