import React from 'react';
import { Query } from '@apollo/client/react/components';
import { Link } from 'react-router-dom';
import { FETCH_CATEGORIES } from '../api/queries';
import './StoreHeader.css';

export default class StoreHeader extends React.Component {
  render() {
    return (
      <div className="navbar">
        <ul className="nav-items">
          <Query query={FETCH_CATEGORIES}>
            {({ loading, data }) => {
              if (loading) return <p>loading</p>;
              return data.categories.map((item, index) => (
                <li className="nav-item">
                  <Link style={{ textDecoration: 'none' }} to={item.name} key={String(index)}>
                    {item.name}
                  </Link>
                </li>
              ));
            }}
          </Query>
        </ul>
      </div>
    );
  }
}
