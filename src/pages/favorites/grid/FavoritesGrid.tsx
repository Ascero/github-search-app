import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import styles from './FavoritesGrid.module.css';
import CardGridListComponent from '../../../layout/CardGridList/CardGridListComponent';
import { FavoritesCtxt } from '../../../shared/favorites-context/favorites-context';
import FavoritesContextProvider from '../../../shared/favorites-context/FavoritesContextProvider';

const FavoritesGrid: React.FC = () => {
  const favoritesContext = useContext(FavoritesCtxt);

  if (favoritesContext.favorites.length === 0)
    return (
      <div className={styles.message}>
        <p>No favorites added yet, search and add!</p>
      </div>
    );

  return (
    <div className={styles.gridContainer}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <FavoritesContextProvider>
          <CardGridListComponent repositories={favoritesContext.favorites} />
        </FavoritesContextProvider>
      </Grid>
    </div>
  );
};

export default FavoritesGrid;
