import Rating from '@mui/material/Rating';
import React, { useEffect, useState } from 'react';
import { GithubRepository } from '../../../../core/models/github-repository.interface';

const RatingComponent: React.FC<{ repository: GithubRepository }> = ({
  repository,
}) => {
  const [rating, setRatingValue] = useState<number>(0);

  /**
   * Personally this kind of rating feature would make sense more for me with a BE working to grab thins info
   * and give a proper rating based on several user. Since I cannot see any specification about data persistence in the test
   * I opted to follow this approach.
   */
  useEffect(() => {
    const storedRate = sessionStorage.getItem(
      `${repository.name}-${repository.forkCount}-rate`,
    );

    if (storedRate) {
      setRatingValue(() => JSON.parse(storedRate));
    }
  }, [repository]);

  const setRating = (value: number | null = 0) => {
    if (value) {
      setRatingValue(() => value);
      sessionStorage.setItem(
        `${repository.name}-${repository.forkCount}-rate`,
        JSON.stringify(value),
      );
    }
  };

  return (
    <>
      <Rating
        name={`${repository.name}-${repository.forkCount}-rate`}
        value={rating}
        onChange={(_event, newValue) => {
          setRating(newValue);
        }}
      />
    </>
  );
};

export default RatingComponent;
