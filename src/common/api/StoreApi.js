import { ApolloClient, InMemoryCache } from '@apollo/client';
import { FETCH_PRODUCTS_BY_CATEGORY, FETCH_PRODUCT_BY_ID } from './queries';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.REACT_APP_API_URL,
});

export const fetchProductsByCategory = async (category) => {
  return client.query({ query: FETCH_PRODUCTS_BY_CATEGORY, variables: { title: category } });
};

export const fetchAllCurrencies = async () => {};

export const fetchProductById = async (id) => {
  return client.query({ query: FETCH_PRODUCT_BY_ID, variables: { id } });
};
