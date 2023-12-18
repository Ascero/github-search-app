import { ReactNode } from 'react';
import { ApolloError } from '@apollo/client';
import { SearchResult } from '../../../../core/models/github-repository.interface';

export interface SearchProviderWrapperProps {
  children: ReactNode;
}

export interface SearchContextProps {
  results: SearchResult[];
  loading: boolean;
  error: ApolloError | undefined;
  searchTerm: string | null;
  // eslint-disable-next-line no-unused-vars
  updateSearchTerm: (term: string) => void;
  updateAfter: () => void;
}
