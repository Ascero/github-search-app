import React from 'react';
import SearchGrid from './SearchGrid/SearchGrid';
import { apolloSearchClient } from '../../core/graphql/apollo.client';
import { ApolloProvider } from '@apollo/client';
import SearchBar from './SearchBar/SearchBar';
import { SearchContextProvider } from './context/SearchContextProvider';
import SearchBottom from './SearchBottom/SearchBottom';

const SearchPage: React.FC = () => {
  return (
    <>
      <ApolloProvider client={apolloSearchClient}>
        <SearchContextProvider>
          <SearchBar></SearchBar>
          <SearchGrid />
          <SearchBottom />
        </SearchContextProvider>
      </ApolloProvider>
    </>
  );
};

export default SearchPage;
