import React from 'react';
import CardsGrid from '../../layout/CardsGrid/CardsGrid';
import { apolloSearchClient } from '../../core/graphql/apollo.client';
import { ApolloProvider } from '@apollo/client';
import SearchBar from './SearchBar/SearchBar';
import { ApolloContextProvider } from '../../core/graphql/store/ApolloContextProvider';

const SearchPage: React.FC = () => {
  return (
    <>
      <ApolloProvider client={apolloSearchClient}>
        <ApolloContextProvider>
          <SearchBar></SearchBar>
          <CardsGrid />
        </ApolloContextProvider>
      </ApolloProvider>
    </>
  );
};

export default SearchPage;
