import React from 'react';
import FavoritesGrid from './grid/FavoritesGrid';
import styles from './FavoritesPage.module.css';
import FavoritesContextProvider from '../../shared/favorites-context/FavoritesContextProvider';

const FavoritesPage: React.FC = () => {
  return (
    <>
      <div className={styles.header}>
        <h1>My favorites</h1>
      </div>
      <FavoritesContextProvider>
        <FavoritesGrid />
      </FavoritesContextProvider>
    </>
  );
};

export default FavoritesPage;
