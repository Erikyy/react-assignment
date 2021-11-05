import { gql } from '@apollo/client';

export const FETCH_CATEGORIES = gql`
  query FetchCategories {
    categories {
      name
    }
  }
`;

export const FETCH_PRODUCTS_BY_CATEGORY = gql`
  query FetchCategory($title: String!) {
    category(input: { title: $title }) {
      products {
        name
        brand
        inStock
        description
        gallery
        category
        attributes {
          id
          name
          type
          items {
            id
            value
          }
        }
        id
        prices {
          currency
          amount
        }
      }
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
