import { useContext } from 'react';
import { GithubRepository } from '../../../../core/models/github-repository.interface';
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';
import { FavoritesCtxt } from '../../../../shared/favorites-context/favorites-context';
import styles from './FavoritesCardButton.module.css';

const FavoritesCardButton: React.FC<{ repository: GithubRepository }> = ({
  repository,
}) => {
  const favoritesContext = useContext(FavoritesCtxt);

  const isFavorite: boolean = favoritesContext.favorites.some(
    (result: GithubRepository) =>
      result.name === repository.name &&
      result.forkCount === repository.forkCount,
  );

  const addFavorite = () => {
    favoritesContext.handleAddFavorite(repository);
  };

  const removeFavorite = () => {
    favoritesContext.handleRemoveFavorite(repository);
  };

  return (
    <>
      {isFavorite ? (
        <>
          <Button
            className={styles.favButton}
            variant="contained"
            size="small"
            onClick={removeFavorite}
          >
            Remove from
            <FavoriteIcon
              className={styles.favIcon}
              style={{ fontSize: '20px' }}
            />
          </Button>
        </>
      ) : (
        <Button
          className={styles.favButton}
          variant="contained"
          size="small"
          onClick={addFavorite}
        >
          Add to
          <FavoriteBorderIcon
            className={styles.favIcon}
            style={{ fontSize: '20px' }}
          />
        </Button>
      )}
    </>
  );
};

export default FavoritesCardButton;
