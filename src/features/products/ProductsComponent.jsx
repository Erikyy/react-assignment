import React from 'react';
import PropTypes from 'prop-types';

class PageComponent extends React.Component {
  render() {
    const { category } = this.props;
    return <h1>Pagecomponent: {category}</h1>;
  }
}
PageComponent.propTypes = {
  category: PropTypes.string.isRequired,
};
export default PageComponent;
