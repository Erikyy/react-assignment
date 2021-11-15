import { ApolloClient, InMemoryCache } from '@apollo/client';
import {
  FETCH_CATEGORIES,
  FETCH_CURRENCIES,
  FETCH_PRODUCTS_BY_CATEGORY,
  FETCH_PRODUCT_BY_ID,
} from './queries';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.REACT_APP_API_URL,
});

export const ApifetchProductsByCategory = async (category) => {
  return client.query({ query: FETCH_PRODUCTS_BY_CATEGORY, variables: { title: category } });
};

export const ApiFetchAllCurrencies = async () => {
  return client.query({ query: FETCH_CURRENCIES });
};

export const ApiFetchAllCategories = async () => {
  return client.query({ query: FETCH_CATEGORIES });
};

export const ApifetchProductById = async (id) => {
  return client.query({ query: FETCH_PRODUCT_BY_ID, variables: { id } });
};
