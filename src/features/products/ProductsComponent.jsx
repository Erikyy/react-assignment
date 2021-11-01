import React from 'react';

class PageComponent extends React.Component {
  render() {
    const { category } = this.props;
    return <h1>Pagecomponent: {category.name}</h1>;
  }
}
export default PageComponent;
