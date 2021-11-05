import React from 'react';
import { connect } from 'react-redux';
import { setActiveCategory } from './CategoriesSlice';
import { NavList } from '../../common/components/navigation/Navbar';
import NavbarLink from '../../common/components/navigation/NavbarLink';
import './Categories.css';

const mapStateToProps = (state) => {
  const categories = state.CategoriesReducer.categories;
  return {
    categories,
  };
};

const mapDispatchToProps = {
  setActiveCategory,
};

class Categories extends React.Component {
  render() {
    return (
      <NavList left>
        {this.props.categories.map((category, index) => (
          <NavbarLink
            path={`/${category.name}`}
            key={String(index)}
            onItemClicked={() => console.log('click category')}
          >
            {category.name}
          </NavbarLink>
        ))}
      </NavList>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
