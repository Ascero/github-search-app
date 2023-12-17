import { createContext } from 'react';
import { ApolloContextProps } from './models/apollo-provider.interface';

export const ApolloCtxt = createContext<ApolloContextProps>({
  searchTerm: 'is:public',
  updateSearchTerm: () => {},
  results: [],
  loading: false,
  error: undefined,
});
