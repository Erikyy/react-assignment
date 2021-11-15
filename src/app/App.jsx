import './App.css';
import React from 'react';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import StoreHeader from '../common/components/StoreHeader';
import ProductsComponent from '../features/products/ProductsComponent';
import { fetchCategories, setActiveCategory } from '../features/categories/CategoriesSlice';
import { fetchProducts } from '../features/products/ProductsSlice';
import ProductComponent from '../features/products/ProductComponent';
import { fetchCurrencies } from '../features/currency-switcher/CurrencySlice';

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
  fetchCurrencies,
};

class App extends React.Component {
  componentDidMount() {
    this.props.fetchCurrencies('USD');
    this.props.fetchCurrencies('AUD');
    this.props.fetchCurrencies('JPY');
    this.props.fetchCategories({ name: 'all' });
    this.props.fetchCategories({ name: 'clothes' });
    this.props.fetchCategories({ name: 'tech' });

    if (this.props.activeCategory === '') {
      this.props.setActiveCategory('all');
    }
    this.props.fetchProducts(this.props.activeCategory === 'all' ? '' : this.props.activeCategory);
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
