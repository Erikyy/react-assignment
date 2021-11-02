import './App.css';
import React from 'react';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import StoreHeader from '../common/components/StoreHeader';
import PageComponent from '../features/products/PageComponent';
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
    this.props.fetchCategories({ name: 'all' });
    this.props.fetchCategories({ name: 'clothes' });
    this.props.fetchCategories({ name: 'tech' });
  }

  render() {
    return (
      <Router>
        <StoreHeader />
        <Switch>
          {/* todo: maybe not hardcode this redirect */}
          <Route exact path="/" render={() => <Redirect to="/all" />} />
          <Route path="/:page" component={PageComponent} />
        </Switch>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
