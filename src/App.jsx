import './styles/App.css';
import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Query } from '@apollo/client/react/components';
import StoreHeader from './components/StoreHeader';
import { FETCH_CATEGORIES } from './queries';
import PageComponent from './components/PageComponent';

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
