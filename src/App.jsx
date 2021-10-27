import './styles/App.css';
import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import StoreHeader from './components/StoreHeader';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.REACT_APP_API_URL,
});

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <StoreHeader />
      </ApolloProvider>
    );
  }
}
