import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import styles from './SearchGrid.module.css';
import {
  GithubRepository,
  SearchResult,
} from '../../../core/models/github-repository.interface';
import { SearchCtxt } from '../context/SearchContext';
import CardGridListComponent from '../../../layout/CardGridList/CardGridListComponent';
import FavoritesContextProvider from '../../../shared/favorites-context/FavoritesContextProvider';
import CircularProgress from '@mui/material/CircularProgress';

const SearchGrid: React.FC = () => {
  const searchContext = useContext(SearchCtxt);

  if (searchContext.loading)
    return (
      <div className={styles.message}>
        <CircularProgress color="primary" size={60} />
      </div>
    );
  if (searchContext.error)
    return (
      <div className={styles.message}>
        <p>An Error occurred: {searchContext.error.message}</p>
      </div>
    );
  if (searchContext.results.length === 0)
    return (
      <div className={styles.message}>
        <p>No results found</p>
      </div>
    );

  const repositories: GithubRepository[] = searchContext.results.map(
    (result: SearchResult) => result.node,
  );

  return (
    <div className={styles.gridContainer}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <FavoritesContextProvider>
          <CardGridListComponent repositories={repositories} />
        </FavoritesContextProvider>
      </Grid>
    </div>
  );
};

export default SearchGrid;
