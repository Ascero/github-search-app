import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { SEARCH_REPOSITORIES_QUERY } from '../search-repositories.query';
import {
  ApolloContextProps,
  ApolloProviderWrapperProps,
} from './models/apollo-provider.interface';
import { ApolloCtxt } from './ApolloContext';

export const ApolloContextProvider: React.FC<ApolloProviderWrapperProps> = ({
  children,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const { loading, error, data } = useQuery(SEARCH_REPOSITORIES_QUERY, {
    variables: {
      searchTerm: searchTerm ? searchTerm : 'is:public',
    },
  });

  const updateSearchTerm = (currentSearchTerm: string) => {
    setSearchTerm(currentSearchTerm);
  };

  const apolloSearchContext: ApolloContextProps = {
    searchTerm,
    updateSearchTerm,
    results: data?.search.edges,
    loading,
    error,
  };

  console.log(apolloSearchContext);

  return (
    <ApolloCtxt.Provider value={apolloSearchContext}>
      {children}
    </ApolloCtxt.Provider>
  );
};
