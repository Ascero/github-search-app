import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { GithubRepository } from '../../../core/models/github-repository.interface';
import FavoritesCardButton from './favorites-card-button/FavoritesCardButton';
import { useLocation } from 'react-router-dom';
import RatingComponent from './rating/RatingComponent';
import styles from './ResultCard.module.css';

const ResultCard: React.FC<{
  repository: GithubRepository;
}> = ({ repository }) => {
  const location = useLocation();

  const card = (
    <>
      <CardContent className={styles.fullContent}>
        <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
          Forked: {repository.forkCount}
        </Typography>
        <Typography variant="h5" component="div">
          {repository.name.toUpperCase()}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Done by: {repository.owner.login}
        </Typography>
        <Typography variant="body2">
          <span className={styles.description}>{repository.description}</span>
        </Typography>
      </CardContent>
      <CardActions>
        <FavoritesCardButton repository={repository}></FavoritesCardButton>
      </CardActions>
      <CardActions>
        {location.pathname === '/favorites' && (
          <RatingComponent repository={repository} />
        )}
      </CardActions>
    </>
  );

  return (
    <>
      <Card
        className={styles.resultCard}
        variant="outlined"
        sx={{ minHeight: 300 }}
      >
        {card}
      </Card>
    </>
  );
};

export default ResultCard;
