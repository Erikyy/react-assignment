import { gql } from '@apollo/client';

export const FETCH_CATEGORIES = gql`
  query FetchCategories {
    categories {
      name
    }
  }
`;

export const FETCH_CATEGORY = gql`
  query FetchCategory($title: String!) {
    category(input: { title: $title }) {
      name
    }
  }
`;

export const FETCH_CURRENCIES = gql`
  query FetchCurrencies {
    currencies
  }
`;

export const FETCH_PRODUCT = gql`
  query FetchProduct($id: String!) {
    product(id: $id) {
      name
    }
  }
`;
