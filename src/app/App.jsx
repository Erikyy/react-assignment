import './App.css';
import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import StoreHeader from '../common/components/StoreHeader';
import PageComponent from '../features/products/ProductsComponent';
import { fetchCategories } from '../features/categories/CategoriesSlice';

const mapStateToProps = (state) => {
  return {
    categories: state.CategoriesReducer.categories,
  };
};

const mapDispatchToProps = {
  fetchCategories,
};

class App extends React.Component {
  componentDidMount() {
    this.props.fetchCategories({ name: 'all', path: '/' });
    this.props.fetchCategories({ name: 'clothes', path: '/clothes' });
    this.props.fetchCategories({ name: 'tech', path: '/tech' });
  }

  render() {
    return (
      <Router>
        <StoreHeader />
        <Switch>
          {this.props.categories.map((category) => (
            <Route path={category.path} component={PageComponent} />
          ))}
        </Switch>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
