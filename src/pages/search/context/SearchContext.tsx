import { createContext } from 'react';
import { SearchContextProps } from './models/search-provider.interface';

export const SearchCtxt = createContext<SearchContextProps>({
  searchTerm: 'is:public',
  updateSearchTerm: () => {},
  results: [],
  loading: false,
  error: undefined,
  updateAfter: () => {},
});
