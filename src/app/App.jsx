import './App.css';
import React from 'react';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import StoreHeader from '../common/components/StoreHeader';
import ProductsComponent from '../features/products/ProductsComponent';
import { fetchCategories, setActiveCategory } from '../features/categories/CategoriesSlice';
import { fetchProducts } from '../features/products/ProductsSlice';
import ProductComponent from '../features/products/ProductComponent';

const mapStateToProps = (state) => {
  return {
    categories: state.CategoriesReducer.categories,
    activeCategory: state.CategoriesReducer.activeCategory,
  };
};

const mapDispatchToProps = {
  fetchCategories,
  fetchProducts,
  setActiveCategory,
};

class App extends React.Component {
  componentDidMount() {
    this.props.fetchCategories({ name: 'all' });
    this.props.fetchCategories({ name: 'clothes' });
    this.props.fetchCategories({ name: 'tech' });
    this.props.fetchProducts('');
    this.props.setActiveCategory('all');
    console.log('App mounted');
  }

  render() {
    return (
      <Router>
        <StoreHeader />
        <Switch>
          {/* todo: maybe not hardcode this redirect */}
          <Route exact path="/" render={() => <Redirect to="/all" />} />
          {this.props.categories.map((category, index) => {
            return (
              <Route path={`/${category.name}`} component={ProductsComponent} key={String(index)} />
            );
          })}
          <Route path="/product/:category/:id" component={ProductComponent} />
        </Switch>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
