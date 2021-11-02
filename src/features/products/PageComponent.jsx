import React from 'react';

class PageComponent extends React.Component {
  render() {
    return <h1>Pagecomponent: {this.props.match.url}</h1>;
  }
}
export default PageComponent;
