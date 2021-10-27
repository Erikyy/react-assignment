import './App.css';
import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import StoreHeader from '../common/components/StoreHeader';
import PageComponent from '../features/products/ProductsComponent';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.REACT_APP_API_URL,
});

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <StoreHeader />
          <Switch>
            <Route path="/" exact>
              <h1>all</h1>
            </Route>
            <Route path="/tech" component={PageComponent} />
          </Switch>
        </Router>
      </ApolloProvider>
    );
  }
}
