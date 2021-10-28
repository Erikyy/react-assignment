import './App.css';
import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import StoreHeader from '../common/components/StoreHeader';
import PageComponent from '../features/products/ProductsComponent';
import { fetchCategories } from '../features/categories/CategoriesSlice';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  fetchCategories,
};

class App extends React.Component {
  componentDidMount() {
    this.props.fetchCategories({ name: 'all' });
    this.props.fetchCategories({ name: 'clothes' });
    this.props.fetchCategories({ name: 'tech' });
  }

  render() {
    return (
      <Router>
        <StoreHeader />
        <Switch>
          <Route path="/" exact>
            <h1>all</h1>
          </Route>
          <Route path="/tech" component={PageComponent} />
        </Switch>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
