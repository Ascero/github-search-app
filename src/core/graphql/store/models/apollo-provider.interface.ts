import { ReactNode } from 'react';
import { SearchResult } from '../../../models/github-repository.interface';
import { ApolloError } from '@apollo/client';

export interface ApolloProviderWrapperProps {
  children: ReactNode;
}

export interface ApolloContextProps {
  results: SearchResult[];
  loading: boolean;
  error: ApolloError | undefined;
  searchTerm: string | null;
  // eslint-disable-next-line no-unused-vars
  updateSearchTerm: (term: string) => void;
}
