import React from 'react';
import { connect } from 'react-redux';
import NavItem from '../../common/components/navigation/NavItem';
import NavList from '../../common/components/navigation/NavList';
import './Categories.css';

const mapStateToProps = (state) => {
  const categories = state.CategoriesReducer.categories;
  return {
    categories,
  };
};

class Categories extends React.Component {
  render() {
    return (
      <NavList className="left">
        {this.props.categories.map((category, index) => (
          <NavItem key={String(index)}>
            <p>{category.name}</p>
          </NavItem>
        ))}
      </NavList>
    );
  }
}

export default connect(mapStateToProps)(Categories);
