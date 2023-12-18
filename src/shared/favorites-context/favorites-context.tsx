import { createContext } from 'react';
import { FavoritesContext } from './model/favorites-context.interface';

export const FavoritesCtxt = createContext<FavoritesContext>({
  favorites: [],
  handleAddFavorite: () => {},
  handleRemoveFavorite: () => {},
});
