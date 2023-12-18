import Grid from '@mui/material/Grid';
import { GithubRepository } from '../../core/models/github-repository.interface';
import React from 'react';
import ResultCard from './Card/ResultCard';

const CardGridListComponent: React.FC<{ repositories: GithubRepository[] }> = ({
  repositories,
}) => {
  return (
    <>
      {repositories.map((repository: GithubRepository) => (
        <Grid
          item={true}
          xs={2}
          sm={4}
          md={4}
          key={`${repository.owner.login}-${repository.name}`}
        >
          <ResultCard repository={repository} />
        </Grid>
      ))}
    </>
  );
};

export default CardGridListComponent;
