import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import styles from './CardsGrid.module.css';
import { SearchResult } from '../../core/models/github-repository.interface';
import ResultCard from './Card/ResultCard';
import { ApolloCtxt } from '../../core/graphql/store/ApolloContext';

const CardsGrid: React.FC = () => {
  const searchContext = useContext(ApolloCtxt);
  if (searchContext.loading) return <p>Loading...</p>;
  if (searchContext.error) return <p>Error: {searchContext.error.message}</p>;

  return (
    <div className={styles.grid_container}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {searchContext.results.map((results: SearchResult, index) => (
          <Grid item={true} xs={2} sm={4} md={4} key={index}>
            <ResultCard repository={results?.node} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CardsGrid;
