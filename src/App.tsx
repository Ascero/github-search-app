import './App.css';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './core/graphql/apollo.client';
import CardResult from './layout/Card/CardResult';
import Header from './layout/Header/Header';

function App() {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <Header />
        <CardResult />
      </ApolloProvider>
    </>
  );
}

export default App;
