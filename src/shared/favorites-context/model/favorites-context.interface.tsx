import { GithubRepository } from '../../../core/models/github-repository.interface';

export interface FavoritesContext {
  favorites: GithubRepository[];
  // eslint-disable-next-line no-unused-vars
  handleAddFavorite: (newFavorite: GithubRepository) => void;
  // eslint-disable-next-line no-unused-vars
  handleRemoveFavorite: (removedFavorite: GithubRepository) => void;
}
