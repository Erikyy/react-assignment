import './App.css';
import React from 'react';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import StoreHeader from '../common/components/StoreHeader';
import ProductsComponent from '../features/products/ProductsComponent';
import {
  pushCategory,
  setActiveCategory,
  fetchCategories,
} from '../features/categories/CategoriesSlice';
import { fetchProducts } from '../features/products/ProductsSlice';
import ProductDescriptionPageComponent from '../features/products/ProductDescriptionPageComponent';
import { fetchCurrencies, setActiveCurrency } from '../features/currency-switcher/CurrencySlice';
import CartPage from '../features/cart/cartpage/CartPageComponet';
import Overlay from '../common/components/common/Overlay';

const mapStateToProps = (state) => {
  return {
    currencies: state.CurrencyReducer.currencies,
    categories: state.CategoriesReducer.categories,
    activeCategory: state.CategoriesReducer.activeCategory,
    activeCurrency: state.CurrencyReducer.activeCurrency,
  };
};

const mapDispatchToProps = {
  fetchCategories,
  pushCategory,
  fetchProducts,
  setActiveCategory,
  fetchCurrencies,
  setActiveCurrency,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOverlay: false,
    };
  }

  componentDidMount() {
    if (this.props.currencies.length === 0) {
      this.props.fetchCurrencies();
    }
    if (this.props.categories.length === 0) {
      this.props.pushCategory({ name: 'all' });
      this.props.fetchCategories();
    }

    if (this.props.activeCategory === '') {
      this.props.setActiveCategory('all');
    }

    if (this.props.activeCurrency === '') {
      this.props.setActiveCurrency('USD');
    }
  }

  render() {
    return (
      <Router>
        <StoreHeader
          cartMenuOpen={(open) => {
            this.setState({ showOverlay: open });
          }}
        />
        {this.state.showOverlay ? <Overlay /> : ''}
        <Switch>
          {/* todo: maybe not hardcode this redirect */}
          <Route exact path="/" render={() => <Redirect to="/all" />} />
          {this.props.categories.map((category, index) => {
            return (
              <Route path={`/${category.name}`} component={ProductsComponent} key={String(index)} />
            );
          })}
          <Route path="/product/:category/:id" component={ProductDescriptionPageComponent} />
          <Route path="/cart" component={CartPage} />
        </Switch>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
