import React, { ReactNode, useEffect, useState } from 'react';
import { FavoritesCtxt } from './favorites-context';
import { GithubRepository } from '../../core/models/github-repository.interface';
import { FavoritesContext } from './model/favorites-context.interface';

const FavoritesContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<GithubRepository[]>([]);

  const handleAddFavorite = (selectedRepository: GithubRepository) => {
    if (selectedRepository) {
      setFavorites(() => [selectedRepository, ...favorites]);
      sessionStorage.setItem(
        'favorites',
        JSON.stringify([selectedRepository, ...favorites]),
      );
    }
  };

  const handleRemoveFavorite = (removedFavorite: GithubRepository) => {
    const updatedFavorites = favorites.filter((fav) => {
      return (
        fav.forkCount !== removedFavorite.forkCount &&
        fav.name !== removedFavorite.name
      );
    });
    console.log(favorites);
    setFavorites(() => updatedFavorites);
    sessionStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    sessionStorage.removeItem(
      `${removedFavorite.name}-${removedFavorite.forkCount}-rate`,
    );
  };

  const favoritesContext: FavoritesContext = {
    favorites: favorites,
    handleAddFavorite,
    handleRemoveFavorite,
  };

  useEffect(() => {
    const storedFavorites = sessionStorage.getItem('favorites');

    if (storedFavorites) {
      setFavorites(() => JSON.parse(storedFavorites));
    }
  }, []);

  return (
    <>
      <FavoritesCtxt.Provider value={favoritesContext}>
        {children}
      </FavoritesCtxt.Provider>
    </>
  );
};

export default FavoritesContextProvider;
