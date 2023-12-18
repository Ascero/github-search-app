import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import {
  SearchContextProps,
  SearchProviderWrapperProps,
} from './models/search-provider.interface';
import { SearchCtxt } from './SearchContext';
import { SEARCH_REPOSITORIES_QUERY } from '../../../core/graphql/search-repositories.query';

export const SearchContextProvider: React.FC<SearchProviderWrapperProps> = ({
  children,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [after, setAfter] = useState<string | null>();

  const { loading, error, data } = useQuery(SEARCH_REPOSITORIES_QUERY, {
    variables: {
      searchTerm: searchTerm ? searchTerm : 'is:public',
      after,
    },
  });

  const updateSearchTerm = (currentSearchTerm: string) => {
    setSearchTerm(() => currentSearchTerm);
    setAfter(() => null);
  };

  const updateAfter = () => {
    setAfter(() => data?.search?.pageInfo?.endCursor);
  };

  const searchContext: SearchContextProps = {
    searchTerm,
    updateSearchTerm,
    results: data?.search.edges,
    loading,
    error,
    updateAfter,
  };

  return (
    <SearchCtxt.Provider value={searchContext}>{children}</SearchCtxt.Provider>
  );
};
