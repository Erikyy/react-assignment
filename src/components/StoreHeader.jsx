import React from 'react';
import { Query } from '@apollo/client/react/components';
import { FETCH_CATEGORIES } from '../queries';

export default class StoreHeader extends React.Component {
  render() {
    return (
      <header>
        <Query query={FETCH_CATEGORIES}>
          {({ data }) => {
            console.log(data);
            return <h1>hello</h1>;
          }}
        </Query>
      </header>
    );
  }
}
