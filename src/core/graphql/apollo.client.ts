import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloSearchClient = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_PERSONAL_ACCESS_TOKEN}`,
  },
  cache: new InMemoryCache(),
});
