import { useContext } from 'react';
import { SearchCtxt } from '../context/SearchContext';
import Button from '@mui/material/Button';
import styles from './SearchBottom.module.css';

const SearchBottom = () => {
  const searchContext = useContext(SearchCtxt);

  const showNext = () => {
    searchContext.updateAfter();
  };

  return (
    <>
      {searchContext.loading ? null : (
        <div className={styles.showMoreSection}>
          <Button variant="contained" onClick={showNext}>
            Next
          </Button>
        </div>
      )}
    </>
  );
};

export default SearchBottom;
